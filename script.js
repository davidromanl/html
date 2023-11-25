const { createApp, ref } = Vue;
const app = createApp({
  /* data() {
      return {
        maskTransform: 'translateX(0px)'
      };
    }, */
  setup() {
    const refContainer = ref();
    const maskContainer = ref();
    const maskTransform = ref("translateX(0px)");

    function moveMask(event) {
      if (refContainer.value) {
        const bounding = refContainer.value.getBoundingClientRect();
        const offsetX = event.clientX - bounding.left;
        const percentage = (offsetX / bounding.width) * 100;
        const transformValue =
          -((maskContainer.value.offsetWidth - bounding.width) * percentage) / 100;
        maskTransform.value = `translateX(${transformValue}px)`;
      }
    }

    return {
      refContainer,
      maskContainer,
      maskTransform,
      moveMask,
    };
  },
  /* methods: {
        moveMask(event) {
            const carousel = document.querySelector(".relative");
            if (carousel) {
                const bounding = carousel.getBoundingClientRect();
                const offsetX = event.clientX - bounding.left;
                const percentage = (offsetX / bounding.width) * 100;
                const transformValue = -(
                    ((this.$refs.maskContainer.offsetWidth - bounding.width) *
                        percentage) /
                    100
                );

                this.maskTransform = `translateX(${transformValue}px)`;
            }
        },
    }, */
});

app.mount("#app");
