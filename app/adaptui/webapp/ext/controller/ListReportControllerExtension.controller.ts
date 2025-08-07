import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ListReport/ExtensionAPI';

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
			
		}
	}
}