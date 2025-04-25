import { ElButton } from "element-plus";
import { defineComponent } from "vue";
import { RouterView, useRouter } from "vue-router";

export default defineComponent(() => {

  const router = useRouter()

  const returnIndex = () => {
    return router.push('/')
  }

  return () => (
    <div class={"w-full h-full relative"}>
      <div class={'h-[80px] flex items-center pl-[20px]'}>
        <ElButton type="success" onClick={returnIndex}>返回</ElButton>
      </div>
      <div class={'h-[calc(100%-80px)] w-full relative'}>
        <RouterView />
      </div>
    </div>
  )
})