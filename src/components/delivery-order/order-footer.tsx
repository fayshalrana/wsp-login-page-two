import { MainButton } from "@/components/mainButton"

export function OrderFooter() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <MainButton
          variant="primary"
          className="w-[300px] rounded-full py-4"
          onClick={() => {}}
        >
          Pay Bill
        </MainButton>
      </div>
      
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-black-60">KOTs</span>
          <div className="flex gap-2">
            <span className="rounded-full bg-black-5 px-3 py-1 text-sm">Kitchen</span>
            <span className="rounded-full bg-black-5 px-3 py-1 text-sm">Bar</span>
          </div>
        </div>
      </div>
    </div>
  )
} 