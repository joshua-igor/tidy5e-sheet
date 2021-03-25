export function settingsList(){
  // General Settings
		// Color Theme
		game.settings.register("tidy5e-sheet", "colorScheme", {
			name: `${game.i18n.localize("TIDY5E.Settings.SheetTheme.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.SheetTheme.hint"),
			scope: "user",
			config: true,
			type: String,
			choices: {
				"default": game.i18n.localize("TIDY5E.Settings.SheetTheme.default"),
				"dark": game.i18n.localize("TIDY5E.Settings.SheetTheme.dark")
			},
			default: 'default',
			onChange: data => {
				data === 'dark' ? document.body.classList.add("tidy5eDark"):document.body.classList.remove("tidy5eDark");
			 }
		});
		
		const colorScheme = game.settings.get('tidy5e-sheet', "colorScheme");
		if (colorScheme === 'dark') {
			document.body.classList.add("tidy5eDark");
		}
	
		// Classic Item Controls
		game.settings.register("tidy5e-sheet", "classicControlsEnabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.ClassicControls.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ClassicControls.hint"),
			scope: "user",
			config: true,
			default: false,
			type: Boolean
		});
		
		// Item Info Cards
		game.settings.register("tidy5e-sheet", "itemCardsForAllItems", {
			name: `${game.i18n.localize("TIDY5E.Settings.ItemCardsForAllItems.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ItemCardsForAllItems.hint"),
			scope: "user",
			config: true,
			default: true,
			type: Boolean
		});
		
		game.settings.register("tidy5e-sheet", "itemCardsForNpcs", {
			name: `${game.i18n.localize("TIDY5E.Settings.ItemCardsForNpcs.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ItemCardsForNpcs.hint"),
			scope: "world",
			config: true,
			default: true,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "itemCardsAreFloating", {
			name: `${game.i18n.localize("TIDY5E.Settings.ItemCardsAreFloating.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ItemCardsAreFloating.hint"),
			scope: "user",
			config: true,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "itemCardsDelay", {
			name: `${game.i18n.localize("TIDY5E.Settings.ItemCardsDelay.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ItemCardsDelay.hint"),
			scope: "user",
			config: true,
			default: 300,
			type: Number
		});
	
		game.settings.register("tidy5e-sheet", "itemCardsFixKey", {
			name: `${game.i18n.localize("TIDY5E.Settings.ItemCardsFixKey.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ItemCardsFixKey.hint"),
			scope: "world",
			config: false,
			default: "x",
			type: String
		});
	
		// Show Roll buttons in context Menu
		game.settings.register("tidy5e-sheet", "contextRollButtons", {
			name: `${game.i18n.localize("TIDY5E.Settings.RollButtonsToCard.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.RollButtonsToCard.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
		
		//Show trait labels
		game.settings.register("tidy5e-sheet", "traitLabelsEnabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.TraitLabels.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.TraitLabels.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});

		// Settings Menu
	
		// PC Sheet Settings
	
		game.settings.register("tidy5e-sheet", "classListDisabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.ClassList.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ClassList.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "inspirationAnimationDisabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.InspirationAnimation.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.InspirationAnimation.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "hideIfZero", {
			name: `${game.i18n.localize("TIDY5E.Settings.HideIfZero.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HideIfZero.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "inspirationOnHover", {
			name: `${game.i18n.localize("TIDY5E.Settings.InspirationOnHover.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.InspirationOnHover.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "exhaustionOnHover", {
			name: `${game.i18n.localize("TIDY5E.Settings.ExhaustionOnHover.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ExhaustionOnHover.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
		
		game.settings.register("tidy5e-sheet", "hpBarDisabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.HpBar.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HpBar.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
		
		game.settings.register("tidy5e-sheet", "hpOverlayDisabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.HpOverlay.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HpOverlay.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "traitsTogglePc", {
			name: `${game.i18n.localize("TIDY5E.Settings.TraitsTogglePc.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.TraitsTogglePc.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
		
		game.settings.register("tidy5e-sheet", "traitsMovedBelowResource", {
			name: `${game.i18n.localize("TIDY5E.Settings.TraitsMovedBelowResource.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.TraitsMovedBelowResource.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
	
		// NPC Sheet Settings
		
		game.settings.register("tidy5e-sheet", "traitsMovedBelowResourceNpc", {
			name: `${game.i18n.localize("TIDY5E.Settings.TraitsMovedBelowResource.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.TraitsMovedBelowResource.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "hpBarDisabledNpc", {
			name: `${game.i18n.localize("TIDY5E.Settings.HpBar.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HpBar.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "hpOverlayDisabledNpc", {
			name: `${game.i18n.localize("TIDY5E.Settings.HpOverlay.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HpOverlay.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
		
		game.settings.register("tidy5e-sheet", "traitsAlwaysShownNpc", {
			name: `${game.i18n.localize("TIDY5E.Settings.TraitsAlwaysShown.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.TraitsAlwaysShown.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
		
		game.settings.register("tidy5e-sheet", "skillsAlwaysShownNpc", {
			name: `${game.i18n.localize("TIDY5E.Settings.SkillsAlwaysShown.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.SkillsAlwaysShown.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		// Vehicle Sheet Settings
		
		game.settings.register("tidy5e-sheet", "hpBarDisabledVehicle", {
			name: `${game.i18n.localize("TIDY5E.Settings.HpBar.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HpBar.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "hpOverlayDisabledVehicle", {
			name: `${game.i18n.localize("TIDY5E.Settings.HpOverlay.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HpOverlay.hint"),
			scope: "user",
			config: false,
			default: false,
			type: Boolean
		});
	
		
		//
		// GM Options
		//
		
		// Disable Right Click
		game.settings.register("tidy5e-sheet", "rightClickDisabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.RightClick.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.RightClick.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
	
		// Expanded Sheet
		game.settings.register("tidy5e-sheet", "expandedSheetEnabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.ExpandedSheet.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ExpandedSheet.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
		
		// Portrait Settings
		// Portrait Style
		game.settings.register("tidy5e-sheet", "portraitStyle", {
			name: `${game.i18n.localize("TIDY5E.Settings.PortraitStyle.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.PortraitStyle.hint"),
			scope: "world",
			config: false,
			default: false,
			type: String,
			choices: {
				"default": game.i18n.localize("TIDY5E.Settings.PortraitStyle.default"),
				"pc": game.i18n.localize("TIDY5E.Settings.PortraitStyle.pc"),
				"npc": game.i18n.localize("TIDY5E.Settings.PortraitStyle.npc"),
				"all": game.i18n.localize("TIDY5E.Settings.PortraitStyle.all")
			},
			default: "all"
		});
		
		game.settings.register("tidy5e-sheet", "hpOverlayBorder", {
			name: `${game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.hint"),
			scope: "world",
			config: false,
			default: 0,
			type: Number
		});
	
		game.settings.register("tidy5e-sheet", "hpOverlayBorderNpc", {
			name: `${game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.hint"),
			scope: "world",
			config: false,
			default: 0,
			type: Number
		});
	
		game.settings.register("tidy5e-sheet", "hpOverlayBorderVehicle", {
			name: `${game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.hint"),
			scope: "world",
			config: false,
			default: 0,
			type: Number
		});
	
		// Total Edit Lock
		game.settings.register("tidy5e-sheet", "editTotalLockEnabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.EditTotalLock.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.EditTotalLock.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "editGmAlwaysEnabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.EditGmAlways.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.EditGmAlways.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
		
		game.settings.register("tidy5e-sheet", "editEffectsGmOnlyEnabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.EditEffectsGmOnly.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.EditEffectsGmOnly.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
		
		// Item quantity
		game.settings.register("tidy5e-sheet", "quantityAlwaysShownEnabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.QuantityAlwaysShown.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.QuantityAlwaysShown.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
	
		// Tracker Settings
			game.settings.register("tidy5e-sheet", "exhaustionEffectsEnabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.ExhaustionEffects.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ExhaustionEffects.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
	
		game.settings.register("tidy5e-sheet", "customExhaustionIcon", {
			name: `${game.i18n.localize("TIDY5E.Settings.CustomExhaustionIcon.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.CustomExhaustionIcon.hint"),
			scope: "world",
			config: false,
			default: '',
			type: String
		});
			
		game.settings.register("tidy5e-sheet", "exhaustionDisabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.ExhaustionDisabled.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ExhaustionDisabled.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
		
		game.settings.register("tidy5e-sheet", "inspirationDisabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.InspirationDisabled.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.InspirationDisabled.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
		
		// NPC Resting
		game.settings.register("tidy5e-sheet", "restingForNpcsEnabled", {
			name: `${game.i18n.localize("TIDY5E.Settings.RestingForNpcs.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.RestingForNpcs.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
	
		// Link Marker
		game.settings.register("tidy5e-sheet", "linkMarkerNpc", {
			name: `${game.i18n.localize("TIDY5E.Settings.LinkMarker.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.LinkMarker.hint"),
			scope: "world",
			config: false,
			type: String,
			choices: {
				"default": game.i18n.localize("TIDY5E.Settings.LinkMarker.default"),
				"unlinked": game.i18n.localize("TIDY5E.Settings.LinkMarker.unlinked"),
				"both": game.i18n.localize("TIDY5E.Settings.LinkMarker.both")
			},
			default: 'default'
		});
		
		// Show if item has active effects
		game.settings.register("tidy5e-sheet", "activeEffectsMarker", {
			name: `${game.i18n.localize("TIDY5E.Settings.ActiveEffectsMarker.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.ActiveEffectsMarker.hint"),
			scope: "world",
			config: false,
			default: false,
			type: Boolean
		});
}