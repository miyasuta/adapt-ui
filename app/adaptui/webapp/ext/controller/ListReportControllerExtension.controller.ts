import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ListReport/ExtensionAPI';
import VariantManagement from 'sap/m/VariantManagement';

/**
 * @namespace ns.adaptui.ext.controller
 * @controller
 */
export default class ListReportControllerExtension extends ControllerExtension<ExtensionAPI> {
	static overrides = {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ns.adaptui.ext.controller.ListReportControllerExtension
		 */
		onInit(this: ListReportControllerExtension) {
			// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
			const model = this.base.getExtensionAPI().getModel();
			console.log('onInit');
		},

		onBeforeRendering(this: ListReportControllerExtension) {
			console.log('onBeforeRendering');		
		},

		onAfterRendering(this: ListReportControllerExtension) {
			console.log('onAfterRendering');
			// check if standard variant is selected			
			const starndardVariant = 'ns.adaptui::BooksList--fe::PageVariantManagement';
			const vm = this.base.byId('ns.adaptui::BooksList--fe::PageVariantManagement-vm') as VariantManagement;

			// if variant id is provided in startup parameters, set it as current variant
			if (vm.getSelectedKey() === starndardVariant) {
				const params = this.base.getAppComponent().getComponentData()?.startupParameters
				if (params && params.variantId.length > 0) {
					const variantId = params.variantId[0];				
					vm.setCurrentVariantKey(variantId);
					console.log('variant set');
				}
			}			
		},
	}
	
	setVariant(this: ListReportControllerExtension, oEvent: any) {
		console.log("setVariant");
		const vm = this.base.byId('ns.adaptui::BooksList--fe::PageVariantManagement-vm') as VariantManagement;
		const params = this.base.getAppComponent().getComponentData()?.startupParameters
		if (params && params.variantId.length > 0) {
			const variantId = params.variantId[0];				
			vm.setCurrentVariantKey(variantId);
		}
	}
}

// /**
//  * Generated event handler.
//  */
// export function setVariant() {
// 	console.log("setVariant");
// }
