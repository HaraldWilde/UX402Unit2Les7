sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controller.Flights", {
		


/*		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.view.Flights*/

		onInit: function() {
			// Den Router holen
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Eine private Methode _onObjectMatched registrieren, die die CarriD (aus der flights-Route) holt und das Databinding setzt
			oRouter.getRoute("flights").attachMatched(this._onObjectMatched,this);
		},
		// Route Matching: Data Binding setzen, Busy indicator aufrufen vom Request absetzen bis die Daten Received worden
		_onObjectMatched: function(oEvent) {
			// Über die Arguments des Router Objektes die Carrid holen
			var oArgs = oEvent.getParameter("arguments");
			this._sCarrierId = oArgs.carrierId;
			// Mit der Carried den Flights-View an die Flugdaten binden. Zuerst den Flights-View holen
			var oView = this.getView();
			
			oView.bindElement({
				// per Element Binding die CarrierCollection an den View binden
				path: "/CarrierCollection('" + this._sCarrierId + "')",
				// Busy Indicator an:request aus:reciving Events 
				events: {
		            dataRequested: function() {
		                oView.setBusy(true);
		            },
		            dataReceived: function() {
		                oView.setBusy(false);
		            }
				}
			});
			
		},
		
		onNavBack: function() {
	        var oHistory, sPreviousHash, oRouter;
	        oHistory = sap.ui.core.routing.History.getInstance();
	        sPreviousHash = oHistory.getPreviousHash();
	        if (sPreviousHash !== undefined) {
				 window.history.go(-1);
				// oHistory.go(-1);
	        } else {
	            oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	            oRouter.navTo("overview", true /*no history*/ );
	        }
	    }
/*		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.view.Flights
		 */ //	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.view.Flights
		 */ //	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.view.Flights
		 */ //	onExit: function() {
		//
		//	}
		/**
		 *@memberOf com.sap.training.ux402.fullscreen.UX402_FullScreenExercise.controller.Flights
		 */
		 
		 
/*		action: function(oEvent) {
			var that = this;
			var actionParameters = JSON.parse(oEvent.getSource().data("wiring").replace(/'/g, "\""));
			var eventType = oEvent.getId();
			var aTargets = actionParameters[eventType].targets || [];
			aTargets.forEach(function(oTarget) {
				var oControl = that.byId(oTarget.id);
				if (oControl) {
					var oParams = {};
					for (var prop in oTarget.parameters) {
						oParams[prop] = oEvent.getParameter(oTarget.parameters[prop]);
					}
					oControl[oTarget.action](oParams);
				}
			});
			var oNavigation = actionParameters[eventType].navigation;
			if (oNavigation) {
				var oParams = {};
				(oNavigation.keys || []).forEach(function(prop) {
					oParams[prop.name] = encodeURIComponent(JSON.stringify({
						value: oEvent.getSource().getBindingContext(oNavigation.model).getProperty(prop.name),
						type: prop.type
					}));
				});
				if (Object.getOwnPropertyNames(oParams).length !== 0) {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName, oParams);
				} else {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName);
				}
			}
		}*/
		
		
	});
});