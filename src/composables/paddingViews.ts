import { isMiddleScreen } from '@/helper/utils'
import { computed, ref } from 'vue'

export const dockTop = ref(0)
export const usePaddingForViews = () => {
  const paddingBottom = computed(() => {
    if (isMiddleScreen.value) {
      return dockTop.value + 8
    }
    return 8
  })

  const padding = computed(() => {
    return {
      paddingBottom: `${paddingBottom.value}px`,
    }
  })

  return {
    padding,
    paddingBottom,
  }
}
