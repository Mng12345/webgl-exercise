import { defineComponent, onMounted, ref } from "vue";
import * as exercise01 from '@/core/exercise01'

export default defineComponent(() => {
  const container = ref<HTMLDivElement | null>(null)
  onMounted(() => {
    if (!container.value) return
    exercise01.run(container.value)
  })
  return () => (
    <div>
      <div class={'text-center mb-4 text-[#333] text-[16px] font-bold'}>exercise01 - hello world</div>
      <div class='w-full flex justify-center mt-4'>
        <div ref={container} class={'w-[800px] h-[600px]'}></div>
      </div>
    </div>
  )
})