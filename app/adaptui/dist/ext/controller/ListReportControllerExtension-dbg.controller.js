sap.ui.define(["sap/ui/core/mvc/ControllerExtension"], function (ControllerExtension) {
  "use strict";

  /**
   * @namespace ns.adaptui.ext.controller
   * @controller
   */
  const ListReportControllerExtension = ControllerExtension.extend("ns.adaptui.ext.controller.ListReportControllerExtension", {
    override: {
      /**
       * Called when a controller is instantiated and its View controls (if available) are already created.
       * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
       * @memberOf ns.adaptui.ext.controller.ListReportControllerExtension
       */
      onInit() {
        // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
        const model = this.base.getExtensionAPI().getModel();
        console.log('onInit');
      },
      onBeforeRendering() {
        // check if standard variant is selected			
        const starndardVariant = 'ns.adaptui::BooksList--fe::PageVariantManagement';
        const vm = this.base.byId('ns.adaptui::BooksList--fe::PageVariantManagement-vm');

        // if variant id is provided in startup parameters, set it as current variant
        if (vm.getSelectedKey() === starndardVariant) {
          const params = this.base.getAppComponent().getComponentData()?.startupParameters;
          if (params && params.variantId.length > 0) {
            const variantId = params.variantId[0];
            vm.setCurrentVariantKey(variantId);
          }
        }
      },
      onAfterRendering() {
        console.log('onAfterRendering');
      }
    },
    setVariant: function _setVariant(oEvent) {
      console.log("setVariant");
      const vm = this.base.byId('ns.adaptui::BooksList--fe::PageVariantManagement-vm');
      let variantId = '';
      vm.setCurrentVariantKey(variantId);
    }
  }); // /**
  //  * Generated event handler.
  //  */
  // export function setVariant() {
  // 	console.log("setVariant");
  // }
  return ListReportControllerExtension;
});
//# sourceMappingURL=ListReportControllerExtension-dbg.controller.js.map
