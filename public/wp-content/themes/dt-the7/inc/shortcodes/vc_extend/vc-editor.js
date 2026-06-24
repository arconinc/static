(function ($) {

	if (!window.vc || typeof window.vc.EditElementUIPanel === 'undefined') {
		return;
	}

	/**
	 * vc_row params switcher.
	 */
	var rowParamsFilter = function() {
		var self = this;

		var commonParams = [ 'el_class' ];

		var paramsFilter = function(index, element) {
			var $element = $(element);
			if ( $element.hasClass('dt_vc_row-params_switch') ) {
				return false;
			}
            var name = $element.attr('data-vc-shortcode-param-name');

			return commonParams.indexOf(name) < 0;
		};

		var getCustomParams = function() {
			return self.$('.vc_shortcode-param.dt_vc_row-param').filter(paramsFilter);
		};

		var getNativeParams = function() {
			return self.$('.vc_shortcode-param').not('.dt_vc_row-param').filter(paramsFilter);
		};

		var switchParams = function(val) {
			var $designOptionsTab = $('.vc_edit-form-tab-control[data-tab-index="1"], .vc_edit-form-tab-control[data-tab-index="2"], .vc_edit-form-tab-control[data-tab-index="3"]', self.$tabsMenu);

			if ( 'vc_default' === val ) {
				getCustomParams().hide();
				getNativeParams().show();

				$designOptionsTab.show();
			} else {
				getCustomParams().show();
				getNativeParams().hide();

				$designOptionsTab.hide();
			}
		};

		var onChangeEvent = 'change.dt_vc_ext.vc_row.type';
		var selector = '.dropdown.type';

		// If there is no controls just bail.
		if ( this.$(selector).length <= 0 ) {
		    return;
        }

		switchParams(this.$(selector).val());

		this.$el
			.off(onChangeEvent, selector)
			.on(onChangeEvent, selector, function() {
				switchParams($(this).val());
			});
	};

	var uniqueArray = function() {
	    this.storage = [];
    };
    uniqueArray.prototype.add = function(val) {
        if ( ! this.has(val) ) {
            this.storage.push(val);
        }
    };
    uniqueArray.prototype.remove = function(val) {
        var i = this.storage.indexOf(val);
        if ( i >= 0 ) {
            this.storage.splice(i, 1);
        }
    };
    uniqueArray.prototype.has = function(val) {
        return this.storage.indexOf(val) >= 0;
    };
    uniqueArray.prototype.length = function() {
        return this.storage.length;
    };

	var blogListMetaFilter = function() {
	    var self = this;
		var metaInfo = new uniqueArray();
        var toHide = [
            'meta_info_font_style',
            'meta_info_font_size',
            'meta_info_line_height',
            'custom_meta_color',
            'meta_info_bottom_margin'
        ];
        var selector = [
            'post_date',
            'post_category',
            'post_author',
            'post_comments'
        ].map(function(val) { return '.wpb_vc_param_value.'+val; }).join(', ');
        var onChangeEvent = 'change.dt_vc_ext.dt_blog_list.meta_info';

        var metaFilter = function(i, el) {
            var name = $(el).attr('data-vc-shortcode-param-name');
            return toHide.indexOf(name) >= 0;
        };

		this.$el
			.off(onChangeEvent, selector)
			.on(onChangeEvent, selector, function() {
				var $this = $(this);
                var name = $this.attr('name');
				if ( $this.is(':checked') ) {
					metaInfo.add(name);
				} else {
                    metaInfo.remove(name);
				}

				var length = metaInfo.length();
                if ( length == 1 ) {
                    self.$('.vc_shortcode-param').filter(metaFilter).removeClass('vc_dependent-hidden');
                } else if ( length == 0 ) {
                    self.$('.vc_shortcode-param').filter(metaFilter).addClass('vc_dependent-hidden');
                }
			});

        $(selector, this.$el).each(function() {
            var $this = $(this);
            if ( $this.is(':checked') ) {
                metaInfo.add($this.attr('name'));
            }
        }).first().trigger(onChangeEvent);
	};

    var blogListCategorizationFilter = function() {
        var self = this;
        var categorization = new uniqueArray();
        var toHide = ['gap_below_category_filter'];
        var selector = [
            'show_categories_filter',
            'show_orderby_filter',
            'show_order_filter'
        ].map(function(val) { return '.wpb_vc_param_value.'+val; }).join(', ');
        var onChangeEvent = 'change.dt_vc_ext.dt_blog_list.categorization_info';

        var categorizationFilter = function(i, el) {
            var name = $(el).attr('data-vc-shortcode-param-name');
            return toHide.indexOf(name) >= 0;
        };

        this.$el
            .off(onChangeEvent, selector)
            .on(onChangeEvent, selector, function() {
                var $this = $(this);
                var name = $this.attr('name');
                if ( $this.is(':checked') ) {
                    categorization.add(name);
                } else {
                    categorization.remove(name);
                }

                var length = categorization.length();
                if ( length == 1 ) {
                    self.$('.vc_shortcode-param').filter(categorizationFilter).removeClass('vc_dependent-hidden');
                } else if ( length == 0 ) {
                    self.$('.vc_shortcode-param').filter(categorizationFilter).addClass('vc_dependent-hidden');
                }
            });

        $(selector, this.$el).each(function() {
            var $this = $(this);
            if ( $this.is(':checked') ) {
                categorization.add($this.attr('name'));
            }
        }).first().trigger(onChangeEvent);
    };

    var defaultButtonTabsFilter = function() {
        const onChangeEvent = 'change.dt_vc_ext.dt_default_button.size';
        const selector = '.dropdown.size';
        const $field = this.$(selector);

        // If there is no control just bail.
        if (!$field.length) return;

        const $tabsMenu = this.$tabsMenu;
        const tabSelector = (i) =>
            `.vc_edit-form-tab-control[data-tab-index="${i}"]`;
        const $designOptionsTab     = $tabsMenu.find( tabSelector(1) );
        const $designOptionsTabLink = $tabsMenu.find( tabSelector(2)  );
        const switchParams = (val) => {
            $designOptionsTab.toggle(val === 'custom');
            $designOptionsTabLink.toggle(val === 'link');
        };
        // Initial state
        switchParams($field.val());

        // Bind change event directly to the field
        $field.off(onChangeEvent)
            .on(onChangeEvent, function () {
                switchParams(this.value);
            });
    }

    const proto = window.vc.EditElementUIPanel.prototype;
    const originalBuild = proto.buildParamsContent;

    proto.buildParamsContent = function(data) {
        originalBuild.call(this, data);
        // We need to wait until all params will be rendered to be able to manipulate with them.
        this.once('afterRender', () => {
            switch (this.model.attributes.shortcode) {
                case 'vc_row':
                    rowParamsFilter.call(this, data);
                    break;

                case 'dt_blog_list':
                    blogListMetaFilter.call(this, data);
                    blogListCategorizationFilter.call(this, data);
                    break;

                case 'dt_default_button':
                    defaultButtonTabsFilter.call(this, data);
                    break;
            }
        });
	};

	if ( typeof vc.atts.parseFrame != 'undefined' ) {

		var atts__parseFrame = vc.atts.parseFrame;
		vc.atts.parseFrame = function(param) {
			var res = atts__parseFrame.call(this, param);

			/**
			 * Remove vc.atts.css_editor and any other callbacks.
			 *
			 * In vc.atts.css_editor.render there was added filter that removes deprecated fields (bg_image, margin_bottom i.e). The7 use this fields so filter must be removed.
			 */
			if ( 'vc_row' == this.model.attributes.shortcode ) {
				vc.edit_form_callbacks = [];
			}
			return res;
		}

	}
})(window.jQuery);
