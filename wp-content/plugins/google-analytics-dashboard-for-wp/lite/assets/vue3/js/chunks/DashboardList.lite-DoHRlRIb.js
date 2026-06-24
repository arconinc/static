import { u as useRouter } from "./TheAppHeader-CTxD_Qzq.js";
import { U as UpsellModal, u as useSampleData } from "./useSampleData-DxFfwWZA.js";
import { u as useFeatureGate } from "./useFeatureGate-Da2MEhDG.js";
import { x as onMounted, o as openBlock, c as createElementBlock, b as createVNode, u as unref } from "./_plugin-vue_export-helper-Bo8CISUk.js";
import "./Icon-TeJm2ys2.js";
const _hoisted_1 = { class: "exactmetrics-dashboard-list" };
const _sfc_main = {
  __name: "DashboardList.lite",
  setup(__props) {
    const router = useRouter();
    const {
      shouldShowUpsell,
      upsellContent,
      hasSampleData,
      openUpsellModal,
      closeUpsellModal,
      enableSampleMode
    } = useFeatureGate("custom-dashboard");
    const { sampleData: sampleViewData, loadSampleData: loadSampleView } = useSampleData("custom-dashboard", "sample-view");
    onMounted(async () => {
      await loadSampleView();
      openUpsellModal();
    });
    async function handleSeeSample() {
      if (!sampleViewData.value) {
        await loadSampleView();
      }
      enableSampleMode();
      if (sampleViewData.value?.[0]?.id) {
        router.push({
          name: "dashboard-view",
          params: { id: sampleViewData.value[0].id }
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(UpsellModal, {
          isOpen: unref(shouldShowUpsell),
          feature: "custom-dashboard",
          content: unref(upsellContent),
          showSampleButton: unref(hasSampleData),
          customImage: "sample-image-exactmetrics.png",
          onClose: unref(closeUpsellModal),
          onSeeSample: handleSeeSample
        }, null, 8, ["isOpen", "content", "showSampleButton", "onClose"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
