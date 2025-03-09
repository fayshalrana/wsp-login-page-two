"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { login } from "@/api/auth";
import { getProfile } from "@/api/profile";
import { defaultPageAfterLoginOptions } from "@/constants/defaultPageAfterLoginOptions";

export async function loginUserAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const rememberMe = formData.get("rememberMe") === "on";

  try {
    const loginResponse = await login({ email, password, user_type: "staff" });

    if (!loginResponse.data.success) {
      return {
        success: false,
        isLoading: false,
        message: loginResponse.data.message || "Login failed. Please try again.",
      };
    }

    const { data } = loginResponse.data;

    const profileResponse = await getProfile(
      { user_id: data.user.user_id.toString() },
      { Authorization: `Bearer ${data.token}` }
    );

    if (!profileResponse.data.success) {
      return {
        success: false,
        isLoading: false,
        message:
          profileResponse.data.message || "Failed to fetch user profile. Please try again.",
      };
    }

    // 🔹 Await cookies before using them
    const cookieStore = await cookies();

    cookieStore.set("authToken", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: rememberMe ? 60 * 60 * 23 : 60 * 60, // 23 hours or 60 minutes
    });

    cookieStore.set("userId", data.user.user_id.toString(), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: rememberMe ? 60 * 60 * 23 : 60 * 60, // 23 hours or 60 minutes
    });

    cookieStore.set("brandId", data.brand_id.toString(), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: rememberMe ? 60 * 60 * 23 : 60 * 60, // 23 hours or 60 minutes
    });

    const defaultPage =
      profileResponse.data.data.performance_metrics?.display_page_after_login || "/";

    const routeMap = {
      [defaultPageAfterLoginOptions.KITCHEN_PANEL]: "/",
      [defaultPageAfterLoginOptions.LIVE_COUNTER]: "/live-counter",
      [defaultPageAfterLoginOptions.DASHBOARD]: "/dashboard",
      [defaultPageAfterLoginOptions.ORDER_STATUS_SCREEN]: "/order-status",
      [defaultPageAfterLoginOptions.MENU_MANAGEMENT]: "/menu-management",
      [defaultPageAfterLoginOptions.OTP_CONFIRMATION]: "/otp-confirmation",
    };

    const redirectTo = routeMap[defaultPage as keyof typeof routeMap] || "/";

    cookieStore.set("defaultPage", defaultPage, {
      httpOnly: false,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: rememberMe ? 60 * 60 * 23 : 60 * 60,
    });

    return {
      redirectTo,
      isLoading: false,
      success: true,
      authToken: data.token,
      userId: data.user.user_id.toString(),
      brandId: data.brand_id.toString(),
      message: "Login was successful",
    };
  } catch (error: any) {
    return {
      isLoading: false,
      success: false,
      message: error.response?.data?.message || "Login failed. Please try again.",
    };
  }
}

export async function clearCookies() {
  // 🔹 Await cookies before using them
  const cookieStore = await cookies();

  cookieStore.delete("authToken");
  cookieStore.delete("brandId");
  cookieStore.delete("userId");
  cookieStore.delete("defaultPage");

  return { success: true };
}

export async function redirectFunction(redirectTo: string) {
  redirect(redirectTo);
}

export async function revalidateLayout() {
  revalidatePath("/", "layout");
}
