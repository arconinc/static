jQuery(document).ready( function($) {

	function updatePresetsList(newPresetsList) {
		var $presets = $("#the7-post-meta-presets");
		$presets.empty();

		newPresetsList.forEach(function (presetName) {
			$("<option />", {
				value: presetName.id,
				text: presetName.name
			}).appendTo($presets);
		});
	}

	function isError(response) {
		return !response.success;
	}

	function alertError(response) {
		try {
			alert(response.data.msg);
		} catch (e) {
			console.log(e);
		}
	}

	function getPostMeta() {
		return $(".the7-mb-field").not(".dont-save-in-preset").find(":input").serializeArray();
	}

	function postPresetAction(presetAction, data) {
		data = $.extend({}, data, {
			action: "the7_meta_preset",
			preset_action: presetAction,
			_ajax_nonce: the7MetaPresetsNonces[presetAction] || ""
		});

		return $.post(ajaxurl, data);
	}

	function presetActionsVisibilityCheck() {
		var id = $("#the7-post-meta-presets").val();
		var $buttons = $("#the7-post-meta-save-preset, #the7-post-meta-delete-preset, #the7-post-meta-apply-preset");

		if (id) {
			$buttons.removeAttr("disabled");
		} else {
			$buttons.attr("disabled", "disabled");
		}
	}

	$("#the7-post-meta-apply-preset").on("click", function (event) {
		event.preventDefault();

		var postID = $("#post_ID").val();
		var id = $("#the7-post-meta-presets").val();

		if (id === "") {
			return;
		}

		var $this = $(this);
		var originText = $this.text();
		$this.addClass("active ready").text(the7MetaPresetsStrings.applyingPreset);

		postPresetAction("apply_preset", {
			postID: postID,
			id: id
		})
			.done(function (response) {
				if ( isError(response) ) {
					$this.removeClass("active ready").text(originText);
					alertError(response);
					return;
				}

				window.location.reload();
			})
			.fail(function () {
				$this.removeClass("active ready").text(originText);
			});
	});

	$("#the7-post-meta-delete-preset").on("click", function (event) {
		event.preventDefault();

		var postID = $("#post_ID").val();
		var id = $("#the7-post-meta-presets").val();

		if (id === "") {
			return;
		}

		postPresetAction("delete_preset", {
			postID: postID,
			id: id
		})
			.done(function (response) {
				if ( isError(response) ) {
					alertError(response);
					return;
				}

				try {
					updatePresetsList(response.data.presetsNames);
					presetActionsVisibilityCheck();
				} catch (e) {
					// Some error handling.
					console.log(e);
				}
			});
	});

	$("#the7-post-meta-add-preset").on("click", function (event) {
		event.preventDefault();

		var title = prompt(the7MetaPresetsStrings.enterName, "");
		title = title ? title.trim() : "";
		if (!title) {
			return;
		}

		var postID = $("#post_ID").val();

		postPresetAction("add_preset", {
			postID: postID,
			title: title,
			meta: getPostMeta()
		})
			.done(function (response) {
				if ( isError(response) ) {
					alertError(response);
					return;
				}

				try {
					updatePresetsList(response.data.presetsNames);
					presetActionsVisibilityCheck();
				} catch (e) {
					// Some error handling.
					console.log(e);
				}
			});
	});

	$("#the7-post-meta-save-preset").on("click", function (event) {
		event.preventDefault();

		var postID = $("#post_ID").val();
		var id = $("#the7-post-meta-presets").val();

		if (id === "") {
			return;
		}

		postPresetAction("save_preset", {
			postID: postID,
			id: id,
			meta: getPostMeta()
		})
			.done(function (response) {
				if ( isError(response) ) {
					alertError(response);
					return;
				}

				alert(the7MetaPresetsStrings.presetSaved);
			});
	});

	$("#the7-post-meta-save-defaults").on("click", function (event) {
		event.preventDefault();

		var postID = $("#post_ID").val();

		postPresetAction("save_defaults", {
			postID: postID,
			meta: getPostMeta()
		})
			.done(function (response) {
				if ( isError(response) ) {
					alertError(response);
					return;
				}

				alert(the7MetaPresetsStrings.defaultsSaved);
			});
	});
});
