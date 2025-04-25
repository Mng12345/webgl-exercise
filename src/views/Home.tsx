import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent(() => {
  return () => {
    return <div class="w-full h-full">
      <div class={'mt-10'}>
        <div class={'flex w-full justify-center'}>
          <div>
            <RouterLink to="/exercise01"><a class={'underline'}>exercise01 - hello world</a></RouterLink>
          </div>
        </div>
      </div>
    </div>
  }
})