(function ($) {
    $(function () {
              var AjaxUrl                   = edn_pro_script_variable.ajax_url;
              var admin_nonce               = edn_pro_script_variable.ajax_nonce;
              var selected_widget_limits    = edn_pro_script_variable.selected_widget_limits;
              var saving_data               = edn_pro_script_variable.saving_msg;
              var saved_data                = edn_pro_script_variable.saved_data;
              var plugin_pathinfo           = edn_pro_script_variable.plugin_pathinfo;

               $('.apexnb-selection').selectbox(); 
               
             // $(window).on("load",function(){
             //    $(".apexnb-dropcontent").mCustomScrollbar({
             //        axis:"x" // horizontal scrollbar
             //    });
             //   });
             
               $(".custom-support,.edn-inner-main-title").click(function(){
                var id = $(this).attr('id');
                $(this).toggleClass('apexnb-open');
                $(this).next().toggleClass('apexnb-open-content');

                if(id == "custom"){
                    $(this).next(".edn-custom-content").slideToggle(500);
                }else if(id == "nb-design"){
                    $(this).next(".edn-design-content").slideToggle(500);
                }else if(id == "duration"){
                    $(this).next(".edn-date-base-bar").slideToggle(500);
                }else if(id == "position"){
                    $(this).next(".edn-position-content").slideToggle(500);
                }else if(id == "layout"){
                    $(this).next(".edn-bar-template").slideToggle(500);
                }else if(id == "logo_setup"){
                    $(this).next(".apexnb-logo-image").slideToggle(500);
                }else if(id == "background-image-setup"){
                    $(this).next(".apexnb-background-image").slideToggle(500);
                }else if(id== "components"){
                    $('.edn-show-components').slideToggle('slow');
                }
                 $(this).find(".arrow-up, .arrow-down").toggle();
                });

             /* mailchimp settings lists*/
               $(".edn_liststable").hide();
                $(".edn-inner-list-name").click(function(){
                var id = $(this).attr('id');
                var splitid = id.split('-');
                var idd = splitid[1];
                 $('#lists-'+idd).slideToggle(500);
                 $(this).find(".arrow-up, .arrow-down").toggle();
                });
            /* mailchimp settings lists end*/

             $( '.ednnb-tabs-trigger' ).click(function(){
                 if($(this).attr('id') == "mailchimp-settings" || $(this).attr('id') == "import-export"){
                $('.edn_submit_section').hide();
                }else if($(this).attr('id') == "test-mail"){
                    $('.edn_submit_section').hide();
                }
                else{
                    $('.edn_submit_section').show();
                }
                $( '.ednnb-tabs-trigger' ).removeClass( 'nav-tab-active' );
                $(this).addClass( 'nav-tab-active' );
                var board_id = 'tab-'+$(this).attr('id');
                $('.ednnb-tab-contents').hide();
                $('#'+board_id).show();
            });

             //sortable initialization
               $('.edn-nb-list').sortable({
                    containment: "parent"
               });
                
              //Add sortable posts list if selected display posts by id
                // $("#edn_add_posts").click(function(){  
            $(".edn-settings-form").on('click','#edn_add_posts',function(){  
                var checkedval = $('input[name="edn_nb-add-check[]"]:checked').length;
            
                if (checkedval != 0) {
                       $('#edn-nb-list-wrapper').show();
                       $('.nb-add-check').each(function(){
                       if($(this).is(':checked') ){
                            var list_val = $(this).val();
                            var list_text = $(this).data('postname');
                               if($('.edn-nb-list #end_pro-list-'+list_val).length==0){
                                   $('.edn-nb-list').append('<div class="edn-indiv-nb-disp-id ui-sortable" val="'+list_val+'" id="end_pro-list-'+list_val+'"><input type="hidden" name="edn_display[]" value="'+list_val+'"/><span class="ednpro_cusrom-arrows"><i class="fa fa-arrows"></i></span><span class="edn-by-id">'+list_text+'</span><a href="#" class="remove_field"><i class="dashicons dashicons-trash"></i></a></div>');      
                               }
                             }                    
                           });
                       }
                       else
                      { alert('Please Select Atleast One.'); }
                });

            /* Display bar to specific pages/posts Notification bar settings page*/
             /*   $(".edn-settings-form").on('click','#edn_add_pages',function(){  
                var checkedvall = $('input[name="edn_add_spage[]"]:checked').length;
                if (checkedvall != 0) {
                       $('#edn-nb-list-wrapper').show();
                       $('.nb-add-check').each(function(){
                       if($(this).is(':checked') ){
                            var list_val = $(this).val();
                            var list_text = $(this).data('postname');
                               if($('.edn-nb-list2 #end_pro-list-'+list_val).length==0){
                                   $('.edn-nb-list2').append('<div class="edn-indiv-nb-disp-id edn-indiv-nb-disp-pages" val="'+list_val+'" id="end_pro-list-'+list_val+'"><input type="hidden" name="edn_showpages[]" value="'+list_val+'"/><span class="ednpro_cusrom-arrows"><i class="fa fa-arrows"></i></span><span class="edn-by-id">'+list_text+'</span><a href="#" class="remove_field"><i class="dashicons dashicons-trash"></i></a></div>');      
                               }
                             }                    
                           });
                       }
                       else
                      { alert('Please Select Atleast One.'); }
                });*/
                      /* Display bar to specific pages/posts Notification bar settings page*/
                $(".edn-settings-form").on('click','#edn_add_pages',function(){  
                var checkedvall = $('input[name="edn_add_spage[]"]:checked').length;
                var checkedvall1 = $('input[name="edn_nb-add-check[]"]:checked').length;
                if (checkedvall != 0) {
                       $('#edn-nb-list-wrapper').show();
                       $('.nb-add-check').each(function(){
                       if($(this).is(':checked') ){
                            var list_val = $(this).val();
                            var list_text = $(this).data('postname');
                               if($('.edn-nb-list2 #end_pro-list-'+list_val).length==0){
                                   $('.edn-nb-list2').append('<div class="edn-indiv-nb-disp-id edn-indiv-nb-disp-pages" val="'+list_val+'" id="end_pro-list-'+list_val+'"><input type="hidden" name="edn_showpages[]" value="'+list_val+'"/><span class="ednpro_cusrom-arrows"><i class="fa fa-arrows"></i></span><span class="edn-by-id">'+list_text+'</span><a href="#" class="remove_field"><i class="dashicons dashicons-trash"></i></a></div>');      
                               }
                             }                    
                           });
                       }
                    if (checkedvall1 != 0) {
                       $('#edn-nb-list-wrapper').show();
                       $('.nb-add-check').each(function(){
                       if($(this).is(':checked') ){
                            var list_val = $(this).val();
                            var list_text = $(this).data('postname');
                               if($('.edn-nb-list2 #end_pro-list-'+list_val).length==0){
                                   $('.edn-nb-list2').append('<div class="edn-indiv-nb-disp-id edn-indiv-nb-disp-pages" val="'+list_val+'" id="end_pro-list-'+list_val+'"><input type="hidden" name="edn_showpages[]" value="'+list_val+'"/><span class="ednpro_cusrom-arrows"><i class="fa fa-arrows"></i></span><span class="edn-by-id">'+list_text+'</span><a href="#" class="remove_field"><i class="dashicons dashicons-trash"></i></a></div>');      
                               }
                             }                    
                           });
                       }
                       /*else
                      { alert('Please Select Atleast One.'); }*/
                });
                 
              //Delete testimonial when selected display testimonial by id    
               $('.edn-nb-list,.edn-nb-list2').on("click",".remove_field", function(e){
                   e.preventDefault();
                        var r = confirm("Do you want to delete this selection?");
                        if (r == true) {
                             $(this).parent('div').remove();
                        } 
                  
               });

                 /* search by title */
                var $block = $('.no-results');
                $("#ednpro_filter").keyup(function() {
                    var val = $(this).val();
                    var isMatch = false;
                    
                    $("a.row-title").each(function(i) {
                        var content = $(this).text();
                        if(content.toLowerCase().indexOf(val) == -1) {
                            $(this).closest('tr').fadeOut();          
                        
                        } else {
                            isMatch = true;
                            $(this).closest('tr').show();
                             
                        }
                    });
                    
                    $block.toggle(!isMatch);
                });

        // Notificaiton show on pages settings Options
         $('#edn-notify-on-pages').change(function () {
           
                if ($(this).val() == "specific_pages") {
                    $('.show_pages_lists').show();
                    $('.show_cat_lists').hide();
                }else if($(this).val() == "specific_categories"){
                    $('.show_cat_lists').show();
                    $('.show_pages_lists').hide();
                }else{
                    $('.show_pages_lists').hide();
                    $('.show_cat_lists').hide();
                }
            });

         if ($( "#edn-notify-on-pages option:selected" ).val() == "specific_pages") {
                $('.show_pages_lists').show();
                $('.show_cat_lists').hide();
            }else if ($( "#edn-notify-on-pages option:selected" ).val() == "specific_categories") {
                $('.show_pages_lists').hide();
                 $('.show_cat_lists').show();
            }
            else{
                $('.show_pages_lists').hide();
                $('.show_cat_lists').hide();
            }

         //Notificaiton show on pages settings Options End

            
        $('#edn-add-button').click(function(){
            var error_html = $('input[name="edn_bar_name"]').data('error-msg');
            var error_flag = 0;
            if($('input[name="edn_bar_name"]').val() == ''){
                error_flag = 1;
                $('input[name="edn_bar_name"]').closest('.edn-field-wrapper').find('.edn-error').html(error_html);
            }
            if (error_flag == 1)
            {
                return false;
            }
            else
            {
                return true;
            }
        });
        $('.edn-add-trigger-button').click(function(){
            $('#edn-add-button').click();
        });
        
        // Choose Notification bar type
            $('input:radio[name="edn_bar_type"]').click(function () {
                if($('.edn-hidden-bar-name').val() !==''){
                   
                    if(confirm(edn_pro_script_variable.bar_warning)){
                        if ($(this).val() == 1)
                        { //custom design
                            $('.edn-template-chooser').hide();
                            $('.edn-hide-in-pre-tpl').show();
                            $('.apexnb_background_image_toggle').show();
                           if($("#edn-notification-comp").is(':checked')){
                              $('.edn-components-wrap').show();
                           }else{
                              $('.edn-components-wrap').hide();
                           }
                           
                            $('.edn-common-option-panel').show();
                            $('.edn-font-demo-wrap').show();
                            $('.edn-custom-social-color').show();
                            $('.edn-custom-countdown-color').show(); //countdown design
                              $('.edn-custom-hide').show(); // custom video design
                            $('.edn-show-border-color').show();//open panel show border color
                           
                            var icon_type = $('.edn_icon_types option:selected').val();
                            if(icon_type == "custom_icon"){
                                 $('.edn_icon_types').closest('.edn-col-icons').find('.customicons').show();
                                 $('.edn_icon_types').closest('.edn-col-icons').find('.available-icons').hide();
                            }else if(icon_type == "available_font_icon"){
                                  $('.edn_icon_types').closest('.edn-col-icons').find('.customicons').hide();
                               $('.edn_icon_types').closest('.edn-col-icons').find('.available-icons').show();
                            }

                            $('.edn-template-preview').hide();

                        }
                        else
                        {
                            var selectedprebar = $('.edn_bar_template option:selected').val();
                            $('.edn-template-preview').hide();
                            $('.edn-template-previewbox-'+selectedprebar).show();
                            $('.edn-hide-in-pre-tpl').hide();
                            $('.apexnb_background_image_toggle').hide();
                            $('.edn-template-chooser').show();
                            $('.edn-font-demo-wrap').hide();
                            $('.edn-custom-social-color').hide();
                            $('.edn-custom-countdown-color').hide();
                             $('.edn-custom-hide').hide();
                             $('.edn-show-border-color').hide(); //open panel hide border color
                            if($('input:radio[name="edn_bar_template"]#edn-template-3').is(':checked')){
                                $('.edn-components-wrap').hide();
                                $('.edn-common-option-panel').hide();
                            }else{
                                $('.edn-components-wrap').show();
                                $('.edn-common-option-panel').show();
                            } 
                            
                            $('.available-icons').show();
                            $('.customicons').hide();
                        }
                    }else{
                        return false;
                    }
                }else{
                  
                    if ($(this).val() == 1)
                    {
                        $('.edn-template-chooser').hide();
                        $('.edn-hide-in-pre-tpl').show();
                        $('.apexnb_background_image_toggle').show();
                         $('.edn-font-demo-wrap').show();
                         $('.edn-custom-social-color').show();
                         $('.edn-custom-countdown-color').show();
                          $('.edn-custom-hide').show();
                         $('.edn-show-border-color').show();
                      
                           var icon_type = $('.edn_icon_types option:selected').val();
                            if(icon_type == "custom_icon"){
                                  $('.edn_icon_types').closest('.edn-col-icons').find('.customicons').show();
                                 $('.edn_icon_types').closest('.edn-col-icons').find('.available-icons').hide();
                            }else if(icon_type == "available_font_icon"){
                                  $('.edn_icon_types').closest('.edn-col-icons').find('.customicons').hide();
                               $('.edn_icon_types').closest('.edn-col-icons').find('.available-icons').show();
                            }
                    }
                    else
                    {
                         $('.edn-hide-in-pre-tpl').hide();
                         $('.apexnb_background_image_toggle').hide();
                         $('.edn-template-chooser').show();
                         $('.edn-font-demo-wrap').hide();
                         $('.edn-custom-social-color').hide();
                         $('.edn-custom-countdown-color').show();
                         $('.edn-custom-hide').show();
                         $('.edn-show-border-color').hide();
                         $('.available-icons').show();
                         $('.customicons').hide();
                    }
                }
            });     
            $('.edn-template').click(function(){
                if($(this).val()==3){

                    $('.edn-components-wrap').show();
                    $('.edn-common-option-panel').show();
                }else{
                    $('.edn-components-wrap').show();
                    $('.edn-common-option-panel').show();
                }
            });   
            var bar_type = $('input[name="edn_bar_type"]:checked').val();
            if(bar_type==2){
                          
                            $('.available-icons').show();
                            $('.customicons').hide();
                            $('.edn-show-border-color').hide();
                if($('input:radio[name="edn_bar_template"]#edn-template-3').is(':checked')){
                    $('.edn-components-wrap').show();
                    $('.edn-common-option-panel').show();
                    $('.edn-font-demo-wrap').hide();
                }else{
                    $('.edn-components-wrap').show();
                    $('.edn-common-option-panel').show();
                    $('.edn-font-demo-wrap').hide();
                } 
            }
            
            if($('input:radio[name="edn_bar_type"]#edn_individual').is(':checked')){
                $('.edn-row.edn-template-chooser').css('display','none');
                $('.edn-hide-in-pre-tpl').show();
                $('.apexnb_background_image_toggle').show();
                 $('.edn-font-demo-wrap').show();
                 $('.edn-custom-social-color').show();
                  $('.edn-custom-countdown-color').show();
                  $('.edn-custom-hide').show();
                  $('.edn-show-border-color').show();
                
            }else{
                $('.edn-template-chooser').show();
                $('.edn-hide-in-pre-tpl').hide();
                $('.apexnb_background_image_toggle').hide();
                $('.edn-custom-social-color').hide();
                 $('.edn-custom-countdown-color').hide();
                 $('.edn-custom-hide').hide();
                            $('.available-icons').show();
                            $('.customicons').hide();
                            $('.edn-show-border-color').hide();
            }//Choose Notification bar type end


    
            /* Social Network Section */
            
            // Social Network options
            $('#edn-social-network').change(function () {
                if ($(this).is(':checked')) {
                    var bar_type2 = $('input[name="edn_bar_type"]:checked').val();
                    if(bar_type2 == 1){
                        $('.edn-social-panel-wrap').slideDown();
                         $('.edn-custom-social-color').show();
                         $('.edn-custom-social-color').show();

                    }else{
                        $('.edn-social-panel-wrap').slideDown();
                         $('.edn-custom-social-color').hide();
                         $('.edn-custom-social-color').hide();
                         
                    }
                    
                }else{
                    $('.edn-social-panel-wrap').slideUp();
                }
            });

            $('#edn-notification-comp').change(function () {
                if ($(this).is(':checked')) {
                    $('.edn-components-wrap').slideDown();
                }else{
                    $('.edn-components-wrap').slideUp();
                }
            });

            
            if ($('#edn-social-network').is(':checked')) {
                var bar_type2 = $('input[name="edn_bar_type"]:checked').val();
                    if(bar_type2 == 1){
                        $('.edn-social-panel-wrap').slideDown();
                         $('.edn-custom-social-color').show();
                    }else{
                        $('.edn-social-panel-wrap').slideDown();
                         $('.edn-custom-social-color').hide();
                    }
            }else{
                $('.edn-social-panel-wrap').slideUp();
            }//End social network options

             if ($('#edn-notification-comp').is(':checked')) {
                $('.edn-components-wrap').slideDown();
            }else{
                $('.edn-components-wrap').slideUp();
            }//End social network options

            $('#edn-show-add-fields').click(function(){
                $('.edn-social-empty').toggle();
            });
            //font awesome icons chooser
            $('.edn-font-icon-chooser').click(function () {
                $('.edn-font-awesome-icons').show();
            });
            
            //fontawesome icon chooser close
            $('.edn-close-font,.edn-lightbox').click(function () {
                $('.edn-font-awesome-icons').hide();
                $('.edn-fa-icons-wrap').hide();
            });


            
           $(document).keyup(function(e) {
                 if (e.keyCode == 27) { // escape key maps to keycode `27`
                  $('.edn-font-awesome-icons').hide();
                  $('.edn-fa-icons-wrap').hide();
                }
            });

            $('.edn-font-awesome-icons .fontawesome-icon-list a').click(function (e) {
                e.preventDefault();
                var attr_class = $(this).find('i').attr('class').replace('fa-3x', '');
                var append_html = '<i class="' + attr_class + '"></i>';
                $('.edn-font-icon-preview').html(append_html);
                $('#edn-font-awesome-icon').val(attr_class);
                $('.edn-font-awesome-icons').hide();
            });
            
            //font awesome icons chooser
            $('.edn-edit-font-icon-chooser').click(function () {
                var id = this.id;
                $('.edn-fa-icons-wrap').addClass(id);
                $('.'+id).show();
            });
            
            $('.edn-fa-icons-wrap .fontawesome-icon-list a').click(function (e) {
                e.preventDefault();
                var attr_class = $(this).find('i').attr('class').replace('fa-3x', '');
                var append_html = '<i class="' + attr_class + '"></i>';
                $('.edn-font-icon-preview').html(append_html);
                $(this).closest('.edn-field').find('.edn-edit-font-awesome-icon').val(attr_class);
                $('.edn-fa-icons-wrap').hide();
            });

            $('.edn_icon_types').change(function(){
                var icon_type = $(this).val();
             
               if(icon_type == 'custom_icon'){
                                     $(this).closest('.edn-col-icons').find('.customicons').show();
                                     $(this).closest('.edn-col-icons').find('.available-icons').hide();
                              
                              }else if(icon_type == "available_font_icon"){
                                     $(this).closest('.edn-col-icons').find('.customicons').hide();
                                     $(this).closest('.edn-col-icons').find('.available-icons').show();
                               
                              }
                    
            });

        
                        
            //Adding icon to list 
            $('#edn-social-add').click(function () {
                error_flag = 0;
                if ($('#edn-icon-title').val() == '')
                {
                    error_flag = 1;
                    var error_html = $('#edn-icon-title').attr('data-error-msg');
                    $('#edn-icon-title').closest('.edn-field-wrapper').find('.edn-error').html(error_html);
                }
                if ($('#edn-icon-link').val() == '')
                {
                    error_flag = 1;
                    var error_html = $('#edn-icon-link').attr('data-error-msg');
                    $('#edn-icon-link').closest('.edn-field-wrapper').find('.edn-error').html(error_html);
                }
                var bar_type2 = $('input[name="edn_bar_type"]:checked').val();
                if(bar_type2 == 1){ //custom
                   if ($('#edn-font-awesome-icon').val() == '' && $('#edn-custom-icon').val() == '')
                        {
                            error_flag = 1;
                            var error_html = $('#edn-font-awesome-icon').attr('data-error-msg');
                            $('#edn-font-awesome-icon').closest('.edn-field-wrapper').find('.edn-error').html(error_html);
                        }
                }else{
                    if ($('#edn-font-awesome-icon').val() == '')
                    {
                        error_flag = 1;
                        var error_html = $('#edn-font-awesome-icon').attr('data-error-msg');
                        $('#edn-font-awesome-icon').closest('.edn-field-wrapper').find('.edn-error').html(error_html);
                    }
                }
                
    
                if (error_flag == 0)
                {
                   //var limit_msg = $('#edn-icon-counter').data('msg');
                    //var icon_counter = $('#edn-icon-counter').val();
                   // icon_counter++;
                    //if(icon_counter<=15){
                      //  $('#edn-icon-counter').val(icon_counter);
                        var icon_title = $('#edn-icon-title').val();
                        var icon_size = $('#edn-icon-size').val();

                        //var font_icon = $('#edn-font-awesome-icon').val();
                        var icon_type = $('.edn_icon_types option:selected').val();
                         var bartype = $('input[name="edn_bar_type"]:checked').val();
                      
                        if(bartype == 1){ //custom
                            if(icon_type == "custom_icon"){
                                // $('.edn_icon_types option:selected').closest('.edn-col-icons').find
                                  var customicon = $('.edn_icon_types option:selected').closest('.edn-col-icons').find('#edn-custom-icon').val();
                                 var font_icon = customicon;
                                 var icontype = icon_type;
                            }else{
                                 var font_icon = $('.edn_icon_types option:selected').closest('.edn-col-icons').find('#edn-font-awesome-icon').val();
                                  var icontype = icon_type;
                            }
                        }else{
                                  var font_icon = $('.edn_icon_types option:selected').closest('.edn-col-icons').find('#edn-font-awesome-icon').val();
                                   var icontype = 'notype';
                        }

                        var icon_bg_color = $('#edn-icon-bg-color').val();
                        var icon_font_color = $('#edn-icon-font-color').val();
                        var icon_bg_hover_color = $('#edn-icon-bg-hover-color').val();
                        var icon_font_hover_color = $('#edn-icon-font-hover-color').val();
                        var icon_link = $('#edn-icon-link').val();
                        var apsFontIconReference = 0;
                        var append_html =
                                '<li class="edn-sortable-icons">' +
                                '<div class="edn-drag-icon"></div>' +
                                '<div class="edn-icon-head"><span class="edn-icon-name">' + icon_title + '</span><span class="edn-icon-list-controls"><span class="edn-arrow-down edn-arrow button button-secondary"><i class="dashicons dashicons-arrow-down"></i></span>&nbsp;&nbsp;<span class="edn-delete-icon button button-secondary" aria-label="delete icon"><i class="dashicons dashicons-trash"></i></span></span></div>' +
                                '<div class="edn-icon-body" style="display: none;">' +
                                '<div class="edn-icon-preview">' +
                                '<label>' + edn_pro_script_variable.icon_preview + '</label>';
                        append_html += '<i class="' + font_icon + '" id="aps-font-icon-' + apsFontIconReference++ + '"></i>';
                        append_html += '</div>' +
                                '<div class="edn-icon-detail-wrapper">' +
                                '<div class="edn-icon-each-detail">' +
                                '<label>' + edn_pro_script_variable.icon_link + '</label>' +
                                '<div class="edn-icon-detail-text">' + icon_link + '</div>' +
                                '</div>' +
                                '<div class="edn-icon-each-detail">' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '<input type="hidden" name="icons[' + icon_title + '][title]" value="' + icon_title + '"/>' +
                                '<input type="hidden" name="icons[' + icon_title + '][icon_type]" value="' + icontype + '"/>' +
                                '<input type="hidden" name="icons[' + icon_title + '][font_icon]" value="' + font_icon + '"/>' +
                                '<input type="hidden" name="icons[' + icon_title + '][icon_size]" value="' + icon_size + '"/>' +
                                '<input type="hidden" name="icons[' + icon_title + '][bg_color]" value="' + icon_bg_color + '"/>' +
                                '<input type="hidden" name="icons[' + icon_title + '][font_color]" value="' + icon_font_color + '"/>' +
                                '<input type="hidden" name="icons[' + icon_title + '][bg_hover_color]" value="' + icon_bg_hover_color + '"/>' +
                                '<input type="hidden" name="icons[' + icon_title + '][font_hover_color]" value="' + icon_font_hover_color + '"/>' +
                                '<input type="hidden" name="icons[' + icon_title + '][link]" value="' + icon_link + '"/>' +
                                '</li>';
                        //alert(append_html);
                        $('.edn-icon-list').append(append_html);
                        if (!$('.edn-icon-theme-expand').is(':visible'))
                        {
                            $('.edn-icon-theme-expand').show();
                        }
                        if ($('.edn-icon-list-wrapper p').is(':visible'))
                        {
                            $('.edn-icon-list-wrapper p').hide();
                        }
                        $('.edn-social-empty input[type="text"]').each(function () {
                            $(this).val('');
                        });
                        $('.edn-social-empty').hide();
                    // }else{
                    //     alert(limit_msg);
                    // }
                }
            });
            $('.edn-social-empty input').keyup(function () {
                $(this).closest('.edn-field-wrapper').find('.edn-error').html('');
            });
    
            $('.edn-icon-list').on('click', '.edn-icon-head', function (e) {
                if ($(this).parent().find('.edn-arrow i').hasClass('dashicons-arrow-down'))
                {
                    $(this).parent().find('i.dashicons-arrow-down').removeClass('dashicons-arrow-down').addClass('dashicons-arrow-up');
                }
                else
                {
                    $(this).parent().find('i.dashicons-arrow-up').removeClass('dashicons-arrow-up').addClass('dashicons-arrow-down');
    
                }
                $(this).closest('.edn-sortable-icons').find('.edn-icon-body').slideToggle(500);
                //e.stopPropagation();
            });
    
            $('.edn-icon-list').on('click', '.edn-delete-icon', function () {
                if (confirm(edn_pro_script_variable.icon_delete_confirm))
                {
                   // var icon_counter = $('#edn-icon-counter').val();
                    //icon_counter--;                  
                    //$('#edn-icon-counter').val(icon_counter);
                    var selector = $(this);
                    $(this).closest('.edn-sortable-icons').fadeOut(800, function () {
                        selector.closest('.edn-sortable-icons').remove();
                    });
                    return false;
                }
            });
    
            //sortable initialization
            $('.edn-icon-list').sortable({
                 containment: "parent" 
            });
            
            //Theme icons expand colledne trigger
            $('.edn-icon-theme-expand').click(function () {
                if ($(this).html() === edn_pro_script_variable.icon_expand)
                {
                    $('.edn-icon-body').slideDown(500)
                    $(this).html(edn_pro_script_variable.icon_collapse)
                    $('i.dashicons-arrow-down').removeClass('dashicons-arrow-down').addClass('dashicons-arrow-up');
                }
                else
                {
                    $('.edn-icon-body').slideUp(500)
                    $('i.dashicons-arrow-up').removeClass('dashicons-arrow-up').addClass('dashicons-arrow-down');
                    $(this).html(edn_pro_script_variable.icon_expand);
                }
            });
            //icon width preview
            $('#edn-icon-width').keyup(function () {
                $('.edn-image-icon-preview img').css({
                    'width': $(this).val()
                });
            });
        
            //border style preview
            $('#edn-icon-height').keyup(function () {
                $('.edn-image-icon-preview img').css({
                    'height': $(this).val()
                });
            });
            
        /* End of Socail Network Section */ 
    
         $('.edn-color-picker').wpColorPicker();

        //color picker
        var myOptions = {
            palettes: true,
            change: function(event, ui){
                $('#edn-label-font-text').css('background-color',ui.color.toString());
               //alert(ui.color.toString());
              }, 
            
            };
       
     $('#edn_bg_color').wpColorPicker(myOptions);//background color of notification bar
     $('#edn-social-heading-text-color').wpColorPicker();//background color of notification bar

       //color picker
        var myOptions2 = {
            palettes: true,
            change: function(event, ui){
                $('#edn-label-font-text').css('color',ui.color.toString());
               //alert(ui.color.toString());
              }, 
            
            };
       
     $('#edn_font_color').wpColorPicker(myOptions2);//background color of notification bar
        
        var fontfamily = $( ".ednfont option:selected" ).text();
        var fontsize = $( "#ednsize option:selected" ).text();
        var bgcolor = $( "#edn_bg_color" ).val();
        var fontcolor = $( "#edn_font_color" ).val();
        //button 
        var btn_bg_color = $( "#cf_bg_color" ).val();
        var btn_font_color = $( "#cf_font_color" ).val();
        var btn_bghover_color = $( "#cf_hover_bg_color" ).val();
        var btn_fonthover_color = $( "#cf_hover_font_color" ).val();
        //button color picker
        var myOptions3 = {
            palettes: true,
            change: function(event, ui){
              ft_color = ui.color.toString();
                $('#edn-label-font-text .btn_preview').css('color',ui.color.toString());
               //alert(ui.color.toString());
              }, 
            
            };  
             var myOptions4 = {
            palettes: true,
            change: function(event, ui){
                bg_color = ui.color.toString();
                $('#edn-label-font-text .btn_preview').css('background-color',ui.color.toString());
               //alert(ui.color.toString());
              }, 
            
            };

          var myOptions5 = {
            palettes: true,
            change: function(event, ui){
                 $('#edn-label-font-text .btn_preview').on('mouseenter',function(){
                     var hover_element = $(this).attr('class');
                     $('#edn-label-font-text .btn_preview:hover').css('background-color',ui.color.toString());
                 });
                 $('#edn-label-font-text .btn_preview').on('mouseleave',function(){
                     var hover_element = $(this).attr('class');
                     $('#edn-label-font-text .btn_preview').css('background-color',bg_color);
                 });
              }, 
            
            }; 

               $("#edn-label-font-text .btn_preview").hover(function(){
                    $(this).css("background-color",btn_bghover_color);
                    $(this).css("color",btn_fonthover_color);
                    }, function(){
                    $(this).css("background-color",btn_bg_color);
                    $(this).css("color",btn_font_color);
              });

           var myOptions6  = {
            palettes: true,
            change: function(event, ui){
              $('#edn-label-font-text .btn_preview').on('mouseenter',function(){
                     var hover_element = $(this).attr('class');
                     $('#edn-label-font-text .btn_preview:hover').css('color',ui.color.toString());
                 });
                 $('#edn-label-font-text .btn_preview').on('mouseleave',function(){
                     var hover_element = $(this).attr('class');
                     $('#edn-label-font-text .btn_preview').css('color',ft_color);
                 });
              }, 
            };       
               $('#cf_font_color').wpColorPicker(myOptions3);//background color of notification bar
               $('#cf_bg_color').wpColorPicker(myOptions4);//background color of notification bar
               $('#cf_hover_bg_color').wpColorPicker(myOptions5);//background color of notification bar
               $('#cf_hover_font_color').wpColorPicker(myOptions6);//background color of notification bar



        //datepicker 12/24/2012
       $('.edn-countdowntimer-datepicker').datetimepicker({
          // timeFormat: "hh:mm:ss",
            dateFormat : 'mm/dd/yy',
            timeFormat: 'HH:mm:ss',
            pickDate: false,
            pickSeconds: false,
            pick12HourFormat: false    
        });
        $('.apexnb-calendar-icon').click(function(event){
        event.preventDefault();
        $('.edn-countdowntimer-datepicker').datetimepicker('show');
         return false;
        });


       $('.edn-datepicker_start').datepicker({ dateFormat: 'yy-mm-dd' });
       $('.edn-datepicker_end').datepicker({ dateFormat: 'yy-mm-dd' });
           
       $('#start').click(function(event){
        event.preventDefault();
        $('.edn-datepicker_start').datepicker('show');
        return false;
       });
       $('#end').click(function(event){
        event.preventDefault();
        $('.edn-datepicker_end').datepicker('show');
         return false;
        });
        
        $(document).click(function(e) { 
            var ele = $(e.toElement); 
            if (!ele.hasClass("edn-datepicker_start") && !ele.hasClass("ui-datepicker") && !ele.hasClass("ui-icon") && !$(ele).parent().parents(".ui-datepicker").length)
               $(".edn-datepicker_start").datepicker("hide"); 
           if (!ele.hasClass("edn-datepicker_end") && !ele.hasClass("ui-datepicker") && !ele.hasClass("ui-icon") && !$(ele).parent().parents(".ui-datepicker").length)
               $(".edn-datepicker_end").datepicker("hide"); 
        });

        //Choose Notification Components
            $('select[name="edn_cp_type"]').change(function(){
                var val = $(this).val();
                if(val=='text'){
                    $('.edn-cp-block').hide();
                    $('.edn-bar-effects').hide();
                    $('#edn-cp-text').show();
                    if ($('input[name="edn_text_display_mode"]:checked').val()=='static') {
                        $('.edn-multiple-content-wrap').hide();
                        $('.edn-static-content-wrap').show();
                        $('.edn-bar-effects').hide();
                    }else{
                        $('.edn-static-content-wrap').hide();
                        $('.edn-multiple-content-wrap').show();
                        $('.edn-bar-effects').show();
                    }//Choose Content Display Mode end
                }else if(val=='email-subs'){
                    $('.edn-cp-block').hide();
                    $('.edn-bar-effects').hide();
                    $('#edn-cp-subscribe').show();
                }else if(val=='twiter-tweets'){
                    $('.edn-cp-block').hide();
                    $('.edn-bar-effects').show();
                    $('#edn-twitter-feeds').show();
                }else if(val=='post-title'){
                    $('.edn-cp-block').hide();
                    $('#edn-post-title').show();
                    $('.edn-bar-effects').show();

                    $('.choosefilter').show();
                    var selectedval =  $('#ednchoosepostsby option:selected').val();
                    if(selectedval == "recent-posts"){
                        $('.apexnb-filterbycat').hide();
                        $('.apexnb-recentposts').show();
                      }else{
                        $('.apexnb-filterbycat').show();
                        $('.apexnb-recentposts').hide();
                      }
                }else if(val=='rss-feed'){
                    $('.edn-cp-block').hide();
                    $('#edn-rss-feed').show();
                    $('.edn-bar-effects').show();
                }else if(val=='countdown-timer'){
                    $('.edn-cp-block').hide();
                    $('.edn-cp-wrap #edn-countdown-timer').show();
                    $('.edn-bar-effects').hide();
                }else if(val=='video-popup'){
                    $('.edn-cp-block').hide();
                    $('.edn-cp-wrap #edn-video-popup').show();
                    $('.edn-bar-effects').hide();
                }
                else if(val=='custom-html'){
                    $('.edn-cp-block').hide();
                    $('#edn-custom-html-content').show();
                    $('.edn-bar-effects').hide();
                }else if(val=='search-form'){
                    $('.edn-cp-block').hide();
                    $('#edn-search-form-content').show();
                    $('.edn-bar-effects').hide();
                }
            });
           // var edn_cp_type = $('input[name="edn_cp_type"]:checked').val();
            var edn_cp_type = $('select[name="edn_cp_type"] option:selected').val();
            if(edn_cp_type=='text'){
                $('.edn-cp-block').hide();
                $('.edn-bar-effects').hide();
                $('#edn-cp-text').show();
            }else if(edn_cp_type=='email-subs'){
                $('.edn-cp-block').hide();
                $('.edn-bar-effects').hide();
                $('#edn-cp-subscribe').show();
            }else if(edn_cp_type=='twiter-tweets'){
                $('.edn-cp-block').hide();
                $('.edn-bar-effects').show();
                $('#edn-twitter-feeds').show();
            }
            else if(edn_cp_type == 'post-title'){
                $('.edn-cp-block').hide();
                $('#edn-post-title').show();
                $('.edn-bar-effects').show();

                $('.choosefilter').show();
                $('.apexnb-filterbycat').hide();
                $('.apexnb-recentposts').hide();
            }else if(edn_cp_type=='rss-feed'){
                    $('.edn-cp-block').hide();
                    $('#edn-rss-feed').show();
                    $('.edn-bar-effects').show();
            }else if(edn_cp_type=='custom-html'){
                    $('.edn-cp-block').hide();
                    $('#edn-custom-html-content').show();
                    $('.edn-bar-effects').hide();
            }else if(edn_cp_type=='countdown-timer'){
                $('.edn-cp-block').hide();
                $('.edn-cp-wrap #edn-countdown-timer').show();
                $('.edn-bar-effects').hide();
            }else if(edn_cp_type=='video-popup'){
                $('.edn-cp-block').hide();
                $('.edn-cp-wrap #edn-video-popup').show();
                $('.edn-bar-effects').hide();
            }else if(edn_cp_type=='search-form'){
                $('.edn-cp-block').hide();
                $('.edn-cp-wrap #edn-search-form-content').show();
                $('.edn-bar-effects').hide();
            }
            else{
                    $('.edn-cp-block').hide();
                    $('#edn-social-panel').hide();
                    $('.edn-bar-effects').hide();
            }//Choose Notification Components end

 
            /* Posts title on change */
             $('#ednchoosepostsby').on('change',function(){
                  var selected_value = $(this).val();
                  if(selected_value == "recent-posts"){
                    $('.apexnb-filterbycat').hide();
                    $('.apexnb-recentposts').show();
                  }else{
                    $('.apexnb-filterbycat').show();
                    $('.apexnb-recentposts').hide();
                  }
             });
             var selectedval =  $('#ednchoosepostsby option:selected').val();
                if(selectedval == "recent-posts"){
                    $('.apexnb-filterbycat').hide();
                    $('.apexnb-recentposts').show();
                  }else{
                    $('.apexnb-filterbycat').show();
                    $('.apexnb-recentposts').hide();
                  }


             /* Posts title on change end */

        //multiple content button action
            $('#edn-add-mcontent').click(function(){
                $('.edn-add-multiple-content').toggle();
            });
            
        //Choose Content Display Mode
            $('input[name="edn_text_display_mode"]').click(function () {
                if ($(this).val()=='static') {
                    $('.edn-multiple-content-wrap').hide();
                    $('.edn-static-content-wrap').show();
                    $('.edn-bar-effects').hide();
                    $(this).attr('checked','checked');
                }else{
                    $('.edn-static-content-wrap').hide();
                    $('.edn-multiple-content-wrap').show();
                    $('.edn-bar-effects').show();
                    $(this).attr('checked','checked');
                }
            });
            
            if(edn_cp_type=='text'){
                if ($('input[name="edn_text_display_mode"]:checked').val()=='static') {
                    $('.edn-multiple-content-wrap').hide();
                    $('.edn-static-content-wrap').show();
                    $('.edn-bar-effects').hide();
                }else{
                    $('.edn-static-content-wrap').hide();
                    $('.edn-multiple-content-wrap').show();
                    $('.edn-bar-effects').show();
                }//Choose Content Display Mode end
            }
        
        // Call to action button
            $('.edn-show-call-button').change(function () {
                if ($(this).is(':checked')) {
                    $('.edn-call-to-action-type').show();
                    $('.end-call-to-action-block').show();
                }else{
                    $('.edn-call-to-action-type').hide();
                    $('.end-call-to-action-block').hide();
                }
            });
            if ($('.edn-show-call-button').is(':checked')) {
                $('.edn-call-to-action-type').show();
                $('.end-call-to-action-block').show();
            }else{
                $('.edn-call-to-action-type').hide();
                $('.end-call-to-action-block').hide();
            }//edn-show-m-call-button
        
        //Choose call to action type  for static
            $('input[name="edn_static[call_action_button]"]').click(function(){
                var val = $(this).val();
                if(val=='custom'){
                    $('.edn-call-action').hide();
                    $('#edn-custom-button-block').show();
                }else if(val=='contact'){
                    $('.edn-call-action').hide();
                    $('#edn-contact-button-block').show();
                }
                else if(val=='shortcode-popup'){
                    $('.edn-call-action').hide();
                    $('#edn-shortcode-button-block').show();
                }
            });
            if($('.edn-call-action-type:checked').val()=='custom'){
                $('.edn-call-action').hide();
                $('#edn-custom-button-block').show();
            }else if($('.edn-call-action-type:checked').val()=='contact'){
                $('.edn-call-action').hide();
                $('#edn-contact-button-block').show();
            } else if($('.edn-call-action-type:checked').val()=='shortcode-popup'){
                    $('.edn-call-action').hide();
                    $('#edn-shortcode-button-block').show();
                }
        
        //Choose Contact From for static
            $('input[name="edn_static[contact_choose]"]').click(function(){
                var val = $(this).val();
                if(val=='c-form'){
                    $('.edn-cotnact-from').hide();
                    $('#edn-contact-custom-form').show();
                }else if(val=='form-7'){
                    $('.edn-cotnact-from').hide();
                    $('#edn-contact-form-7').show();
                }
            });
            if($('input[name="edn_static[contact_choose]"]:checked').val()=='c-form'){
                $('.edn-cotnact-from').hide();
                $('#edn-contact-custom-form').show();
            }else{
                $('.edn-cotnact-from').hide();
                $('#edn-contact-form-7').show();
            }
        
        // Multiple Call to action button
        $('.edn-show-m-call-button').change(function () {
            if ($(this).is(':checked')) {
                $('.edn-m-call-to-action-type').show();
                $('.end-m-call-to-action-block').show();
            }else{
                $('.edn-m-call-to-action-type').hide();
                $('.end-m-call-to-action-block').hide();
            }
        });
        
        //Choose call to action type for multiple
            $('input[name="edn_multi[action_button]"]').click(function(){
                var val = $(this).val();
                if(val=='custom'){
                    $('.edn-m-call-action').hide();
                    $('#edn-m-custom-button-block').show();
                }else if(val=='contact'){
                    $('.edn-m-call-action').hide();
                    $('#edn-m-contact-button-block').show();
                }else if(val=='shortcode-popup'){
                    $('.edn-m-call-action').hide();
                    $('#edn-m-shortcode-button-block').show();
                }
            });
            if($('input[name="edn_multi[action_button]"]:checked').val()=='custom'){
                $('.edn-m-call-action').hide();
                $('#edn-m-custom-button-block').show();
            }else if($('input[name="edn_multi[action_button]"]:checked').val()=='contact'){
                $('.edn-m-call-action').hide();
                $('#edn-m-contact-button-block').show();
            }else if($('input[name="edn_multi[action_button]"]:checked').val()=='shortcode-popup'){
                    $('.edn-m-call-action').hide();
                    $('#edn-m-shortcode-button-block').show();
                }
        
        //Choose Contact From for multiple
            $('input[name="edn_multi[choose]"]').click(function(){
                var val = $(this).val();
                if(val=='c-form'){
                    $('.edn-m-cotnact-from').hide();
                    $('#edn-m-contact-custom-form').show();
                }else if(val=='form-7'){
                    $('.edn-m-cotnact-from').hide();
                    $('#edn-m-contact-form-7').show();
                }
            });
            if($('input[name="edn_multi[choose]"]:checked').val()=='c-form'){
                $('.edn-m-cotnact-from').hide();
                $('#edn-m-contact-custom-form').show();
            }else{
                $('.edn-m-cotnact-from').hide();
                $('#edn-m-contact-form-7').show();
            }
        
        //add multiple content
      //add multiple content
        $('#edn-add-mcontent-but').click(function(){

            //edn-append-mcontent-prevvar content;
            var inputid = 'edn-multiple-text';
            var editor = tinyMCE.get(inputid);
            var textArea = jQuery('textarea#' + inputid);    
            if (textArea.length>0 && textArea.is(':visible')) {
                content = textArea.val();        
            } else {
                content = editor.getContent();
            } 
            error_flag = 0;
            if (content == '')
            {
                error_flag = 1;
                var error_html = $('.edn-button-count').data('error-text-cont');
                $('#edn-multiple-text').closest('.edn-field-wrapper').find('.edn-error').html(error_html);
            }
            if (error_flag == 0)
                {
                    var content;
                    var inputid = 'edn-multiple-text';
                    var editor = tinyMCE.get(inputid);
                    var textArea = jQuery('textarea#' + inputid);    
                    if (textArea.length>0 && textArea.is(':visible')) {
                        content = textArea.val();        
                    } else {
                        content = editor.getContent();
                    }
                  /*  $('.edn-multiple-content-wrap .edn-call-action-type').each(function(){
                        if($(this).is(':checked')){
                            alert($(this).val());
                        }
                    })
                    */
                    var substr_content = content.substr(0, 30);
                    var call_to_action = $('.edn-multiple-content-wrap .edn-show-m-call-button:checked').val();
                    var call_to_acction_type = $('.edn-multiple-content-wrap .edn-call-action-type:checked').val();
                    var link_but_text = $('.edn-multiple-content-wrap #edn-link-but-text').val();
                    var link_but_url = $('.edn-multiple-content-wrap #edn-link-url').val();
                    // var link_target = $('.edn-multiple-content-wrap #edn-link-target option:selected').val();
                    var link_target =  $(this).parent().parent().parent().parent().parent().find('select option:selected').val();
                    var link_but_bg_color = $('.edn-multiple-content-wrap #edn-link-but-color').val();
                    var link_but_txt_color = $('.edn-multiple-content-wrap #edn-link-but-text-color').val();
                    var contact_form_type = $('.edn-multiple-content-wrap .edn-contact-choose:checked').val();
                      if(call_to_acction_type=='custom'){     
                             contact_form_type = '';
                         }else if(call_to_acction_type=='contact'){
                         contact_form_type = contact_form_type;
                         }else{
                        contact_form_type = '';
                         }

                    var contact_bubtn_text = $('.edn-multiple-content-wrap #edn-cc-button-text').val();
                    var edn_cc_name_label = $('.edn-multiple-content-wrap #edn-cc-name-label').val();
                    var edn_cc_email_label = $('.edn-multiple-content-wrap #edn-cc-email-label').val();
                    var edn_cc_name_required = $('.edn-multiple-content-wrap #edn-cc-name-required').val();
                    var edn_cc_email_required = $('.edn-multiple-content-wrap #edn-cc-email-required').val();
                    var edn_cc_msg_required   = $('.edn-multiple-content-wrap #edn-cc-msg-required').val();
                    var edn_cc_msg_label = $('.edn-multiple-content-wrap #edn-cc-msg-label').val();
                    var edn_cc_send_mail = $('.edn-multiple-content-wrap #edn-cc-send-mail').val();
                    //added extra fields
                    var edn_cc_name_placeholder = $('.edn-multiple-content-wrap #edn-cc-name-placeholder').val();
                    var edn_cc_email_placeholder = $('.edn-multiple-content-wrap #edn-cc-email-placeholder').val();
                    var edn_cc_name_error_message = $('.edn-multiple-content-wrap #edn-cc-name-error').val();
                    var edn_cc_email_error_message = $('.edn-multiple-content-wrap #edn-cc-email-error').val();

                    var edn_cc_msg_error_message = $('.edn-multiple-content-wrap #edn-cc-msg-error').val();
                    var edn_cc_email_valid_error_message = $('.edn-multiple-content-wrap #edn-cc-email-valid-error').val();
                    var edn_cc_msg_placeholder = $('.edn-multiple-content-wrap #edn-cc-msg-placeholder').val();
                    var edn_cc_success_message = $('.edn-multiple-content-wrap #edn-cc-success-message').val();
                    var edn_cc_sendfail_msg = $('.edn-multiple-content-wrap #edn-cc-send-fail-msg').val();


                    var edn_form_shortcode = $('.edn-multiple-content-wrap #edn-form-shortcode').val();
                    var edn_custom_shortcode_text = $('.edn-multiple-content-wrap #edn-m-shortcode-button-text').val();
                    var edn_custom_shortcode = $('.edn-multiple-content-wrap #edn-m-custom-shortcode').val();
                    var count = parseInt($('.edn-button-count').val())+1;
                   
                    if(call_to_action){
                      
                        if(call_to_acction_type=='custom'){
                            var preview_content = '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.notification_bar_message+': '+content+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.link_but_text_label+': '+link_but_text+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.link_but_url_label+': '+link_but_url+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.link_but_target+': '+link_target+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.link_but_color_label+': '+link_but_bg_color+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.link_but_font_color_label+': '+link_but_txt_color+'</div></label>';
                        }else if(call_to_acction_type=='contact'){
                            if(contact_form_type=='c-form'){
                                var preview_content = '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.notification_bar_message+': '+content+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.name_label+': '+edn_cc_name_label+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.email_label+': '+edn_cc_email_label+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.name_required_label+': '+edn_cc_name_required+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.email_required_label+': '+edn_cc_email_required+'</div></label>'+
                                               '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.msg_required_label+': '+edn_cc_msg_required+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.message_label+': '+edn_cc_msg_label+'</div></label>'+
                                                '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.send_to_email_label+': '+edn_cc_send_mail+'</div></label>';
                                                 '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.name_placeholder_label+': '+edn_cc_name_placeholder+'</div></label>';
                                                  '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.email_placeholder_label+': '+edn_cc_email_placeholder+'</div></label>';
                                                   '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.message_placeholder_label+': '+edn_cc_msg_placeholder+'</div></label>';
                                                    '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.name_error_message_label+': '+edn_cc_name_error_message+'</div></label>';
                                                     '<label><div class="edn-prev-link-text"><div class="edn-prev-link-text">'+edn_pro_script_variable.email_error_message_label+': '+edn_cc_email_error_message+'</div></label>';
                                                    '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.msg_error_label+': '+edn_cc_msg_error_message+'</div></label>';
                                                      '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.validemail_error_message_label+': '+edn_cc_email_valid_error_message+'</div></label>';
                                                      '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.success_message+': '+edn_cc_success_message+'</div></label>';
                                                        '<label><div class="edn-prev-link-text"><div class="edn-prev-link-text">'+edn_pro_script_variable.send_fail_message+': '+edn_cc_sendfail_msg+'</div></label>';
                            }else{
                                var preview_content = '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.notification_bar_message+': '+content+'</div></label>'+
                                                    '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.contact_form7_label+': '+edn_form_shortcode+'</div></label>';
                            }
                        }else{
                                 var preview_content = '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.notification_bar_message+': '+content+'</div></label>'+
                                                    '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.shortcode_popup_text+': '+edn_custom_shortcode_text+'</div></label>'+
                                                    '<label><div class="edn-prev-link-text">'+edn_pro_script_variable.custom_shortcode+': '+edn_custom_shortcode+'</div></label>';
                        }
                    }else{

                       var preview_content = '<label>No call to action activated for this text.</label>';
                    }

                    var append_html = 
                             '<li class="edn-sortable-content"><div class="edn-content-head" id="edn-c-head_"'+count+'><span class="edn-content-title">'+substr_content.replace('<p>', '').replace('</p>', '')+'...</span>'+
                             '<span class="edn-content-list-controls"><span class="edn-arrow-down edn-arrow button button-secondary"><i class="dashicons dashicons-arrow-down"></i></span>&nbsp;&nbsp;<span class="edn-delete-content button button-secondary" aria-label="delete content"><i class="dashicons dashicons-trash"></i></span></span>'+
                             '</div><div class="edn-multiple-slide-down" style="display: none;"><div class="edn-multi-prev-slide-down">'+preview_content+'</div></div>'+
                             '<textarea class="wp-editor-area" name="edn_multiple[text_content][]" style="display: none;">'+content+'</textarea>'+
                             '<input type="hidden" name="edn_multiple[call_to_action][]" value="'+call_to_action+'">'+
                             '<input type="hidden" name="edn_multiple[call_to_acction_type][]" value="'+call_to_acction_type+'">'+
                             '<input type="hidden" name="edn_multiple[contact_form_type][]" value="'+contact_form_type+'">';
                        // if(call_to_acction_type=='custom'){     
                        //      append_html +=  '<input type="hidden" name="edn_multiple[contact_form_type][]" value="">';
                        //  }else if(call_to_acction_type=='contact'){
                        //  append_html +=  '<input type="hidden" name="edn_multiple[contact_form_type][]" value="'+contact_form_type+'">';
                        //  }else{
                        //  append_html +=  '<input type="hidden" name="edn_multiple[contact_form_type][]" value="">';
                        //  }
                            append_html += '<input type="hidden" name="edn_multiple[contact_btn_text][]" value="'+contact_bubtn_text+'">'+    
                            '<input type="hidden" name="edn_multiple[link_but_text][]" value="'+link_but_text+'">'+
                             '<input type="hidden" name="edn_multiple[link_url][]" value="'+link_but_url+'">'+
                             '<input type="hidden" name="edn_multiple[link_target][]" value="'+link_target+'">'+
                             '<input type="hidden" name="edn_multiple[link_but_color][]" value="'+link_but_bg_color+'">'+
                             '<input type="hidden" name="edn_multiple[link_but_text_color][]" value="'+link_but_txt_color+'">'+
                            '<input type="hidden" name="edn_multiple[popup_text][]" value="'+edn_custom_shortcode_text+'">'+
                            '<input type="hidden" name="edn_multiple[shortcode_popup][]" value="'+edn_custom_shortcode+'">';
                     
                         //if(contact_form_type=='c-form'){
                        append_html +=
                        '<input type="hidden" name="edn_multiple[name_label][]" value="'+edn_cc_name_label+'">'+
                        '<input type="hidden" name="edn_multiple[email_label][]" value="'+edn_cc_email_label+'">'+
                        '<input type="hidden" name="edn_multiple[name_required][]" value="'+edn_cc_name_required+'">'+
                        '<input type="hidden" name="edn_multiple[email_required][]" value="'+edn_cc_email_required+'">'+
                        '<input type="hidden" name="edn_multiple[msg_required][]" value="'+edn_cc_msg_required+'">'+
                        '<input type="hidden" name="edn_multiple[msg_label][]" value="'+edn_cc_msg_label+'">'+
                        '<input type="hidden" name="edn_multiple[send_to_email][]" value="'+edn_cc_send_mail+'">'+
                        '<input type="hidden" name="edn_multiple[name_placeholder][]" value="'+edn_cc_name_placeholder+'">'+
                        '<input type="hidden" name="edn_multiple[email_placeholder][]" value="'+edn_cc_email_placeholder+'">'+
                        '<input type="hidden" name="edn_multiple[name_error_message][]" value="'+edn_cc_name_error_message+'">'+
                        '<input type="hidden" name="edn_multiple[msg_error][]" value="'+edn_cc_msg_error_message+'">'+
                        '<input type="hidden" name="edn_multiple[email_error_message][]" value="'+edn_cc_email_error_message+'">'+
                        '<input type="hidden" name="edn_multiple[email_valid_error_message][]" value="'+edn_cc_email_valid_error_message+'">'+
                        '<input type="hidden" name="edn_multiple[message_placeholder][]" value="'+edn_cc_msg_placeholder+'">'+
                        '<input type="hidden" name="edn_multiple[success_message][]" value="'+edn_cc_success_message+'">'+
                        '<input type="hidden" name="edn_multiple[sendfail_msg][]" value="'+edn_cc_sendfail_msg+'">';
                       // '</li>';
                         
                   // }else{
                        append_html +=
                        '<input type="hidden" name="edn_multiple[form_shortcode][]" value="'+edn_form_shortcode+'">'+
                        '</li>';
                   // }
                  
                    
                    $('.edn-append-mcontent-prev').append(append_html);
                    $('.edn-button-count').val(count);
                    // $('.edn-text-content-wrap input[type="text"]').each(function () {
                    //     $(this).val('');
                    // });
                    // $('.edn-text-content-wrap a.wp-color-result').each(function () {
                    //     $(this).css('background-color','');
                    // });
                    
                    tinymce.init({selector:'textarea'});
                    tinymce.get(inputid).setContent('');
                    $('.edn-add-multiple-content').hide();
                }
        });
        //sortable initialization
        $('.edn-append-mcontent-prev').sortable({
             containment: "parent" 
        });
        $('.edn-append-mcontent-prev').on('click', '.edn-delete-content', function () {
            if (confirm(edn_pro_script_variable.icon_delete_confirm))
            {
                //var content_counter = $('.edn-button-count').val();
//                content_counter--;
//                $('.edn-button-count').val(content_counter);
                var selector = $(this);
                $(this).closest('.edn-sortable-content').fadeOut(800, function () {
                    selector.closest('.edn-sortable-content').remove();
                });
                return false;
            }
        });
        $('.edn-append-mcontent-prev').on('click', '.edn-content-head', function (e) {
             var selector = $(this);
            var id = selector.attr('id');
            var id_array = id.split('_');
            if (selector.parent().find('.edn-arrow i').hasClass('dashicons-arrow-down'))
            {
             
                selector.parent().find('i.dashicons-arrow-down').removeClass('dashicons-arrow-down').addClass('dashicons-arrow-up');
                if (selector.next().find('.edn-show-slide-call-button').is(':checked')) {
                    $('.edn-sctat_'+id_array[1]).show();
                }else{
                    $('.edn-sctat_'+id_array[1]).hide();
                }

                if(selector.next().find('.edn-slide-call-action-type:checked').val()=='custom'){
                    $('.edn-slide-call-action-'+id_array[1]).hide();
                    $('.edn-custom-but-block-'+id_array[1]).show();

                }else if(selector.next().find('.edn-slide-call-action-type:checked').val()=='shortcode-popup'){
                    $('.edn-slide-call-action-'+id_array[1]).hide();
                    $('.edn-shortcode-popup-but-block-'+id_array[1]).show();
                   // alert('#edn-m-shortcode-button-block-'+id_array[1]);
                    $('#edn-m-shortcode-button-block-'+id_array[1]).show();
                }
                else {
                    $('.edn-slide-call-action-'+id_array[1]).hide();
                    $('.edn-contact-but-block-'+id_array[1]).show();
                }
                if(selector.next().find('.edn-slide-call-action-type:checked').val() !='shortcode_popup' && selector.next().find('.edn-slide-call-action-type:checked').val() !='custom'){
                    if(selector.next().find('.edn-slide-contact-choose:checked').val()=='c-form'){
                        $('.edn-slide-cotnact-from-'+id_array[1]).hide();
                        $('.edn-slide-cc-form-'+id_array[1]).show();
                    }else{
                        $('.edn-slide-cotnact-from-'+id_array[1]).hide();
                        $('.edn-slide-cf7-'+id_array[1]).show();
                    }
                }
            }
            else
            {
                selector.parent().find('i.dashicons-arrow-up').removeClass('dashicons-arrow-up').addClass('dashicons-arrow-down');
                $('.edn-sctat_'+id_array[1]).hide();
            }
            selector.closest('.edn-sortable-content').find('.edn-multiple-slide-down').slideToggle(500);
            
        });
        
        //Choose Subscribe From
        $('input[name="edn_subs_choose"]').click(function(){
            var val = $(this).val();
            if(val=='subs-c-form'){
                $('.edn-subs-from').hide();
                $('#edn-subs-custom-form').show();
            }else if(val=='mailchip'){
                $('.edn-subs-from').hide();
                $('#edn-subs-mailchip-form').show();
            }
            // else if(val=='aweber-newsletter'){
            //     $('.edn-subs-from').hide();
            //     $('#edn-subs-aweber-form').show();
            // }
            else if(val=='constant-contact'){
                $('.edn-subs-from').hide();
                $('#edn-subs-constant-contact-form').show();
            }
        });
        if($('input[name="edn_subs_choose"]:checked').val()=='subs-c-form'){
            $('.edn-subs-from').hide();
            $('#edn-subs-custom-form').show();
        }else if($('input[name="edn_subs_choose"]:checked').val()=='mailchip'){
            $('.edn-subs-from').hide();
            $('#edn-subs-mailchip-form').show();
        }else if($('input[name="edn_subs_choose"]:checked').val()=='aweber-newsletter'){
            $('.edn-subs-from').hide();
            $('#edn-subs-aweber-form').show();
        }
        else if($('input[name="edn_subs_choose"]:checked').val()=='constant-contact'){
            $('.edn-subs-from').hide();
            $('#edn-subs-constant-contact-form').show();
        }

         //Constant Contact api validation and getting list
        // $('#edn-constant-submit').click(function(){
        //     var api_key = $('input[name="edn_constant[api_key]"]').val();
        //     var token = $('input[name="edn_constant[token]"]').val();
        //     if(api_key == ''){
        //         alert('API KEY IS SET EMPTY!')
        //     }else if(token == ''){
        //         alert('Token Access IS SET EMPTY!')
        //     }else{
        //     $.ajax({
        //         url: edn_pro_script_variable.ajax_url,
        //         type: 'post',
        //         dataType: 'html',
        //         data: {
        //             action:'ajax_constant_contact',
        //             api_key_cc: api_key,
        //             token: token,
        //             nonce: edn_pro_script_variable.ajax_nonce,
        //         },
        //         beforeSend: function() {
        //             $('.edn-ajax-loader_1').show('slow');
        //         },
        //         complete: function() {
        //             $('.edn-ajax-loader_1').hide('slow');
        //         },
        //         success: function( resp ) {
        //             if(resp){
        //             var res = $.parseJSON(resp);
        //             for(var i = 0;i<res.length;i++){
        //                var const_res = res[i];
        //                var append_html = '<label><input type="radio" name="edn_constant[lists]" id="edn_constant"/>'+const_res+'</label>';
        //               $('.list_constant').append(append_html);
        //             }

        //                 $('.edn-statuss').hide();
        //                 $('.edn-constant-error').html('');
        //                 $('#edn-positive_cc').show();
        //         }else{
        //                 $('.edn-statuss').hide();
        //                 $('#edn-neutral_cc').show();
        //                 $('.edn-constant-error').html(resp);
        //         }
        //             // if(resp==1){
        //             //     $('.edn-statuss').hide();
        //             //     $('.edn-constant-error').html('');
        //             //     $('#edn-positive_cc').show();
        //             // }else{
        //             //     $('.edn-statuss').hide();
        //             //     $('#edn-neutral_cc').show();
        //             //     $('.edn-constant-error').html(resp);
        //             // }
        //         }
        //     });
        //  }
        // });

        
        //Mailchimp api validation and getting list
        $('#edn-mailchimp-submit').click(function(){
            var api_key = $('input[name="edn_mailchimp[api_key]"]').val();

            if(api_key == ''){
                alert('Please fill Mailchimp API Key.');
            }else{
            $.ajax({
                url: edn_pro_script_variable.ajax_url,
                type: 'post',
                dataType: 'html',
                data: {
                    action:'ajax_mailchimp',
                    api_key: api_key,
                    nonce: edn_pro_script_variable.ajax_nonce,
                },
                beforeSend: function() {
                    $('.edn-ajax-loader').show('slow');
                },
                complete: function() {
                    $('.edn-ajax-loader').hide('slow');
                },
                success: function( resp ) {
                    if(resp==1){
                        $('.edn-status').hide();
                        $('.edn-mailchimp-error').html('');
                        // $('#edn-positive').show();
                        var ednpositive = $('#edn-positive').val();
                        $('#edn-postive-response').removeClass('edn_negative').addClass('edn_positive').text(ednpositive);
                    }else{
                        $('.edn-status').hide();
                        // $('#edn-neutral').show();
                        $('.edn-mailchimp-error').html(resp);
                        var ednneutral = $('#edn-neutral').val();
                        $('#edn-postive-response').removeClass('edn_positive').addClass('edn_negative').text(ednneutral);
                    }
                }
            });
            }
        });

     //reset button for show only once
        $('#edn_reset_button').click(function(){
              $.ajax({
                url: edn_pro_script_variable.ajax_url,
                type: 'post',
                dataType: 'html',
                data: {
                    action:'ajax_reset_showonce_backend',
                    nonce: edn_pro_script_variable.ajax_nonce,
                },
                beforeSend: function() {
                    $('.edn-ajax-loader').show('slow');
                },
                complete: function() {
                    $('.edn-ajax-loader').hide('slow');
                },
                success: function( resp ) {
                    if(resp=="success"){
                       $('#edn-reset-message').html('Flag Reset Successfully.').delay(2000).fadeOut();
                    }else{
                       $('#edn-reset-message').html(resp).delay(2000).fadeOut();
                    }
                }
            });
        });
        
        //Choose Notification Bar Effects
            $('input[name="edn_bar_effect_option"]').click(function(){
                var val = $(this).val();
                if(val=='1'){
                    $('.edn-bar-efect-block').hide();
                    $('#edn-bar-ticker').show();
                }else if(val=='2'){
                    $('.edn-bar-efect-block').hide();
                    $('#edn-bar-slider').show();
                }else if(val=='3'){
                    $('.edn-bar-efect-block').hide();
                    $('#edn-bar-scroll').show();
                }
            });
            if($('input[name="edn_bar_effect_option"]:checked').val()=='1'){
                $('.edn-bar-efect-block').hide();
                $('#edn-bar-ticker').show();
            }else if($('input[name="edn_bar_effect_option"]:checked').val()=='2'){
                $('.edn-bar-efect-block').hide();
                $('#edn-bar-slider').show();
            }else{
                $('.edn-bar-efect-block').hide();
                $('#edn-bar-scroll').show();
            }
        
        //display title
        /*$('.edn-title-filter').change(function(){
            var val = $(this).val();
            alert(val);
            $.ajax({
                url: edn_pro_script_variable.ajax_url,
                type: 'post',
                dataType: 'html',
                data: {
                    action:'ajax_display_title',
                    filter_val:val,
                    nonce: edn_pro_script_variable.ajax_nonce,
                },
                beforeSend: function() {
                    $('#edn-filter-loader').show('slow');
                },
                complete: function() {
                    $('#edn-filter-loader').hide('slow');
                },
                success: function( resp ) {
                    if(resp=='all'){
                        $('#edn-all-title').show();
                        $('.edn-apend-titles').html('');
                    }else{
                        $('#edn-all-title').hide();
                        $('.edn-apend-titles').html(resp);
                    }
                }
            });
        }); */

/*new changes */
$('.edn-title-filter').change(function(){
            var val = $(this).val();
            var split1 = val.split("=");
            $.ajax({
                url: edn_pro_script_variable.ajax_url,
                type: 'post',
                dataType: 'html',
                data: {
                    action:'ajax_display_title',
                    filter_val:val,
                    nonce: edn_pro_script_variable.ajax_nonce,
                },
                beforeSend: function() {
                    $('#edn-filter-loader').show('slow');
                },
                complete: function() {
                    $('#edn-filter-loader').hide('slow');
                },
                success: function( resp ) {
                    if(resp=='all'){
                        $('#posts_content').show();
                        $('#posts_content_category').hide();
                        $('.edn-apend-titles').html('');
                    }else{
                        if(split1[0] == "category"){
                            $('#posts_content').hide();
                             $('#posts_content_category').show();
                            $('.edn-apend-titles').html(resp);
                        }else{
                             $('#posts_content').hide();
                              $('#posts_content_category').hide();
                             $('#posts_content_terms').show();
                            $('.edn-apend-titles').html(resp);
                        }
                       
                    }
                }
            });
        });
        
        // Slide Multiple Call to action button
            $('.edn-show-slide-call-button').change(function () {
                var id = this.id;
                var id_array = id.split('_');
                if ($(this).is(':checked')) {
                    $('.edn-sctat_'+id_array[1]).show();
                }else{
                    $('.edn-sctat_'+id_array[1]).hide();
                }
            });
        
        //edit slide down call to action type for multiple
            $('.edn-slide-call-action-type').click(function(){
                var id = this.id;
                var id_array = id.split('_');
                var val = $(this).val();
                if(val=='custom'){
                    $('.edn-slide-call-action-'+id_array[1]).hide();
                    $('.edn-custom-but-block-'+id_array[1]).show();
                }else if(val=='contact'){
                    $('.edn-slide-call-action-'+id_array[1]).hide();
                    $('.edn-contact-but-block-'+id_array[1]).show();
                }else if(val=='shortcode-popup'){
                    $('.edn-slide-call-action-'+id_array[1]).hide();
                    $('.edn-shortcode-popup-but-block-'+id_array[1]).show();
                    $('#edn-m-shortcode-button-block-'+id_array[1]).show();
                }



            });
        
        //slide Contact From for multiple
            $('.edn-slide-contact-choose').click(function(){
                var id = this.id;
                var id_array = id.split('_');
                var val = $(this).val();
                if(val=='c-form'){
                    $('.edn-slide-cotnact-from-'+id_array[1]).hide();
                    $('.edn-slide-cc-form-'+id_array[1]).show();
                }else if(val=='form-7'){
                    $('.edn-slide-cotnact-from-'+id_array[1]).hide();
                    $('.edn-slide-cf7-'+id_array[1]).show();
                }
            });

     /* Demo font style change */
       //google font switching
        $('.ednfont').change(function () {
            var label_font = $(this).val();
            var font_size = $( "#ednsize option:selected" ).text();
            $("#edn-label-font-style").html('');
            $("#edn-label-font-style").html('#edn-label-font-text {font-size: ' + font_size + 'px;font-family: "' + label_font + '" !important; }');      
            if(label_font != "default" && label_font != ''){
            WebFont.load({
                google: {
                    families: [label_font]
                }
            });
            } 
        });

      $("#edn-label-font-text .btn_preview").hover(function(){
           $(this).css("background-color",btn_bghover_color);
            $(this).css("color",btn_fonthover_color);
            }, function(){
            $(this).css("background-color",btn_bg_color);
            $(this).css("color",btn_font_color);
      });


      
         $("#edn-label-font-style").html('#edn-label-font-text {font-size: ' + fontsize + 'px;font-family: "' + fontfamily + '"; }');      
        $('#edn-label-font-text').css('background-color',bgcolor);
        $('#edn-label-font-text').css('color',fontcolor);
        $('#edn-label-font-text .btn_preview').css('background-color',btn_bg_color);
        $('#edn-label-font-text .btn_preview').css('border',btn_bg_color);
        $('#edn-label-font-text .btn_preview').css('color',btn_font_color);
         if(fontfamily != "default" && fontfamily != ''){
         WebFont.load({
                google: {
                    families: [fontfamily]
                }
            });
         }

        
        $("#ednsize").change(function(){
            var family = $( ".ednfont option:selected" ).text();
            var size = $(this).val();
            $("#edn-label-font-style").html('#edn-label-font-text {font-size: ' + size + 'px;font-family: "' + family + '"; } }');      
        });

     /* Subscriber check all */
        $('#ednpro-subs-checkall').change(function() {
            if ($(this).prop('checked')) {
                $(".edn-select-all-subs").prop( "checked", true );
            }
            else {
                $(".edn-select-all-subs").prop( "checked", false );
            }
        });//check all end

     

    /* added code for subscribe form confimration name and email */
       /* custom form */
           if($("#custom_confirm").is(':checked')){
              $('#edn-subs-confirm-fields').show();
            } else {
              $('#edn-subs-confirm-fields').hide();     
            }
             if($("#mailchimp_confirm").is(':checked')){
              $('#edn-subs-mailchimp-confirm').show();
            } else {
              $('#edn-subs-mailchimp-confirm').hide();     
            }
             if($("#cc_confirm").is(':checked')){
              $('#edn-subs-cc-confirm').show();
            } else {
              $('#edn-subs-cc-confirm').hide();     
            }
       
         $('.edn_subs_confirm').on('click',function () {
            var subsid = $(this).attr('id');
          if(subsid == "custom_confirm"){
            if ($(this).is(':checked')) {
                $('#edn-subs-confirm-fields').show('slow');
            } else {
               $('#edn-subs-confirm-fields').hide('slow');     
            }
        }else if(subsid == "mailchimp_confirm"){
            if ($(this).is(':checked')) {
                $('.edn-subs-mailchimp-confirm').show('slow');
            } else {
               $('.edn-subs-mailchimp-confirm').hide('slow');     
            }
        }else{
              if ($(this).is(':checked')) {
                $('.edn-subs-cc-confirm').show('slow');
            } else {
               $('.edn-subs-cc-confirm').hide('slow');     
            }
        }
        
        });

       $('#edn_bar_template').change(function(){
          var templateid = $(this).val();
          $('.edn-template-preview').hide();
          $('.edn-template-previewbox-'+templateid).show();
          if(templateid == "15"){
              $('.apexnb_background_image_toggle').show();
          }else{
              $('.apexnb_background_image_toggle').hide();
          }
       });

     var bar_type = $('input[name="edn_bar_type"]:checked').val();
     if(bar_type == 1){
        $('.apexnb_background_image_toggle').show();
     }else{
       var current_templateid = $( "#edn_bar_template option:selected" ).val();
       if(current_templateid != ''){
         $('.edn-template-previewbox-'+current_templateid).show();
          if(current_templateid == "15"){
           $('.apexnb_background_image_toggle').show();
           }else{
                $('.apexnb_background_image_toggle').hide();
           }
          
       }

     }
      

        $('.edn-visibility').change(function(){
            var val = $(this).val();
           if(val == "show-time"){
              $('.edn-time').find('.edn-visibility-showtime').show('slow');
              $('.edn-time').find('.edn-visibility-hidetime').hide('slow');
              $('.edn-show-click-options').find('.edn-show-click-showtime').hide('slow');
           }else if(val=="hide-time"){
             $('.edn-time').find('.edn-visibility-showtime').hide('slow');
             $('.edn-time').find('.edn-visibility-hidetime').show('slow');
              $('.edn-show-click-options').find('.edn-show-click-showtime').hide('slow');
           }else if(val=="show-on-click"){
             $('.edn-time').find('.edn-visibility-showtime').hide('slow');
             $('.edn-time').find('.edn-visibility-hidetime').hide('slow');
             $('.edn-show-click-options').find('.edn-show-click-showtime').show('slow');

           }else{
             $('.edn-time').find('.edn-visibility-showtime').hide('slow');
             $('.edn-time').find('.edn-visibility-hidetime').hide('slow');
             $('.edn-show-click-options').find('.edn-show-click-showtime').hide('slow');
           }
        });

        $('#edn-close-button').change(function(){
            if($(this).val() == "user-can-close"){
                $('.edn_close_once').show('slow');
                 $('.edn_show_hide').hide();
                 $('.showhide_duration_time').hide();
                  if ($('#show_once').is(':checked')) {
                     $('.duration_time').show('slow');
                }else{
                      $('.duration_time').hide('slow');
                }
            }else if($(this).val() == "show-hide"){
                $('.edn_show_hide').show('slow');
                 $('.edn_close_once').hide();
                 $('.duration_time').hide();
            
            }else{
                    $('.edn_close_once').hide('slow'); 
                    $('.duration_time').hide('slow');
                    $('.edn_show_hide').hide('slow'); 
                   /// $('.showhide_duration_time').hide('slow');
            }
           
        });

      var selected_button = $('#edn-close-button option:selected').val();
      if(selected_button== "user-can-close"){
        $('.edn_close_once').show('slow');
         $('.edn_show_hide').hide();
          if ($('#show_once').is(':checked')) {
                     $('.duration_time').show('slow');
                }else{
                      $('.duration_time').hide('slow');
                }
      }else if(selected_button == "show-hide"){
                 $('.edn_show_hide').show('slow');
                 $('.edn_close_once').hide();
                 $('.duration_time').hide();
      }else{
                    $('.edn_close_once').hide('slow'); 
                    $('.duration_time').hide('slow');
                    $('.edn_show_hide').hide('slow'); 
                   // $('.showhide_duration_time').hide('slow');
      }


         $('#show_once').change(function () {
                if ($(this).is(':checked')) {
                 $('.duration_time').show('slow');
                }else{
                      $('.duration_time').hide('slow');
                }
            });

         /* added features for show/hide*/

         $('#show_once_hideshow').change(function () {
                if ($(this).is(':checked')) {
                 $('.showhide_duration_time').show('slow');
                }else{
                      $('.showhide_duration_time').hide('slow');
                }
            });


              
  
      $('#edn-positions').change(function(){
         var position = $(this).val();
          $('.edn-position-preview').hide();
            $('#edn-positon-'+position).show();
            var upperposition = position.toUpperCase().replace('_',' ');
            $('#edn-positon-'+position+' .edn-backend-inner-title').html('Notification Bar Position Preview: '+upperposition);
          if(position == "top" || position == "top_absolute" || position == "bottom"){
            $('.close_tb_position').show();
          }else{
            $('.close_tb_position').hide();
          }
          if(position == "top" || position == "top_absolute"){
            $('.edn-pbottom,.edn-leftright').hide();
            $('.edn-ptop').show();
            $('.edn-ptopbottom').show();
          }else if(position == "bottom"){
             $('.edn-ptop,.edn-leftright').hide();
             $('.edn-pbottom').show();
             $('.edn-ptopbottom').show();
          }else if(position == "left" || position == "right"){
             $('.edn-ptop,.edn-pbottom,.edn-ptopbottom').hide();
             $('.edn-leftright').show();
          }
       });


       var current_position = $( "#edn-positions option:selected" ).val();
       if(current_position != ''){
            $('#edn-positon-'+current_position).show();
            if(current_position == "top" || current_position == "top_absolute"){
            $('.edn-pbottom,.edn-leftright').hide();
            $('.edn-ptop').show();
            $('.edn-ptopbottom').show();
          }else if(current_position == "bottom"){
            $('.edn-ptop,.edn-leftright').hide();
            $('.edn-pbottom').show();
            $('.edn-ptopbottom').show();
          }else if(current_position == "left" || current_position == "right"){
            $('.edn-ptop,.edn-pbottom,.edn-ptopbottom').hide();
            $('.edn-leftright').show();
          }
       }


        //test mail using ajax
       /* $('#edn-test_mail').click(function(){
       
            var mail_to = $('input[name="edn_test_mail_to"]').val();
            var mail_subject = $('input[name="edn_test_mail_subject"]').val();
            var mail_message = $('textarea[name="edn_test_mail_message"]').val();

            if(mail_to == ''){
                alert('Please fill to email field.');
            }else{
            $.ajax({
                url: edn_pro_script_variable.ajax_url,
                type: 'post',
                dataType: 'html',
                data: {
                    action:'test_smtp',
                    mail_to: mail_to,
                    mail_subject: mail_subject,
                    mail_message: mail_message
                },
                beforeSend: function() {
                    $('.edn-ajax-loader').show('slow');
                },
                complete: function() {
                    $('.edn-ajax-loader').hide('slow');
                },
                success: function( resp ) {
                    alert(resp);
                    $('.edn_testmessage').css('display','block');
                   $('.edn_testmessage').html(resp);
                }
            });
            }
        }); */


     /* 
     * Added features :version 1.0.10
     * Open Panel Section 
     */

       /* enable open panel*/
        $('#edn-open-panel').change(function () {
            if ($(this).is(':checked')) {
                $('.edn-open-panel-wrap').slideDown();          
            }else{
                $('.edn-open-panel-wrap').slideUp();
            }
        });

        if ($('#edn-open-panel').is(':checked')) {
                 $('.edn-open-panel-wrap').slideDown();          
            }else{
                $('.edn-open-panel-wrap').slideUp();
            }

           //add widgets popup chooser
            $('.edn_add_widgets').click(function () {
                $('.edn-addwidgets').show();
            });
            
            $('.edn-close-widgets,.edn-lightbox').click(function () {
                $('.edn-addwidgets').hide();
            });

      //var clicks = 0;
     
      $('.all_wp_widgets').each(function() {
                $(this).click(function(){
                  //  clicks += 1;
                    var count = $('.listed_selected_widgets > div.ednpro_widget_area').length;
            
                    var widget_id =$(this).attr('data-value');
                    var widget_title =$(this).attr('data-text');   
                      
                            if(count == 3){
                             alert(selected_widget_limits);
                            }else{     
                            
                                var widgets = {
                                        action: "add_selected_widget",
                                        widget_id: widget_id,
                                        title: widget_title,
                                        nonce : admin_nonce
                                    };

                                    $.post(AjaxUrl, widgets, function (response) {
                                         var widget = $(response.data); //display widgets by json
                                         $('.edn_listed_widgets').show();
                                         $('.listed_selected_widgets').append(widget);

                                          add_events_widget(widget);
                                    });
                            }


                    });

           });

     //editing widget data
     var widget_area = $('.edn_listed_widgets').find('.listed_selected_widgets');
       $('.ednpro_widget_area', widget_area).each(function() {
             add_events_widget($(this));
      });


     function add_events_widget(widget) {
        // fix for WordPress 4.8 widgets when lightbox is opened, closed and reopened
                   if (wp.textWidgets !== undefined) {
                        wp.textWidgets.widgetControls = {}; // WordPress 4.8 Text Widget
                    }

                    if (wp.mediaWidgets !== undefined) {
                        wp.mediaWidgets.widgetControls = {}; // WordPress 4.8 Media Widgets
                    }

                    if (wp.customHtmlWidgets !== undefined) {
                        wp.customHtmlWidgets.widgetControls = {}; // WordPress 4.9 Custom HTML Widgets
                    }
           
            var widget_title = widget.find(".widget_title span.wptitle");
            var widget_edit = widget.find(".widget-action");
            var widget_inner = widget.find(".widget_inner");
            var widget_id = widget.attr("data-id");

              widget_edit.on('click',function(){
          
                    if (! widget.hasClass("ednpro_open") && ! widget.data("ednpro_loaded")) {
                    widget_title.addClass('ednpro_loading');

                    // retrieve the widget settings form
                    $.post(AjaxUrl, {
                        action: "edit_widget_data",
                        widget_id: widget_id,
                        _wpnonce: admin_nonce,
                        dataType : 'html'
                    }, function (response) {

                        var $response = $(response);
                        var $form = $response.find('form');

                        // bind delete button action
                        $(".ednpro_delete", $form).on("click", function (e) {
                            e.preventDefault();
                            
                            var data = {
                                action: "ednpro_delete_widget",
                                widget_id: widget_id,
                                _wpnonce: admin_nonce
                            };

                            $.post(AjaxUrl, data, function (delete_response) {
                                widget.remove();
                              
                            });

                        });

                        // bind close button action
                        $(".ednpro_close", $form).on("click", function (e) {
                            e.preventDefault();
                            widget.toggleClass("ednpro_open");
                        });

                        // bind save button action
                        $form.on("submit", function (e) {
                            e.preventDefault();
                            var dataa = $(this).serialize();
                             $('.ednpro_save_data').show();
                             $('.saving_msg').text(saving_data);
                            $.post(AjaxUrl, dataa, function (submit_response) {    
                                $('.ednpro_save_data').fadeOut('slow');
                            });

                        });

                        widget_inner.html($response);

                        widget.data("ednpro_loaded", true).toggleClass("ednpro_open");

                        widget_title.removeClass('ednpro_loading');

                        var editorId = widget.find('textarea').attr('id');
                        widget.find('input.title').attr('type','text').addClass('widefat');

                        if ( widget.is( '[id^=text-]' ) ) {
                            if (tinymce.get(editorId)) {
                                wp.editor.remove(editorId);
                            }

                            wp.editor.initialize(editorId, {
                                tinymce: {
                                    wpautop: true,
                                    setup: function (editor) {
                                        editor.on('change', function () {
                                            editor.save();
                                        });
                                    }
                                },
                                quicktags: true
                            });
                        }
                        $('#'+editorId).removeAttr("hidden");
                        widget.find('textarea').removeAttr("hidden");
                    });

                } else {
                 
                    widget.toggleClass("ednpro_open");
                }

                // close all other widgets
                $(".ednpro_widget_area").not(widget).removeClass("ednpro_open");
                    
              }); 
                 return widget;
        }

      $('.listed_selected_widgets').sortable({
            containment: "parent"
       });

      /*
      * APEX COuntdown JS
      */

      $('.apex_countlayout').change(function(){
       var val  = $(this).val();
       $('.preview-counter').css('display','block');
       $('.preview_image').css('display','none');
       $('#counter_'+val).css('display','block');
      });

       var countlayout = $('.apex_countlayout option:selected').val();
       $('.preview-counter').css('display','block');
       $('.preview_image').css('display','none');
       $('#counter_'+countlayout).css('display','block');

       var countlayout2 = $('.apex_countlayout2 option:selected').val();
       $('.preview-counter2').css('display','block');
       $('.preview_image2').css('display','none');
       $('#counter2_'+countlayout2).css('display','block');


      $('.apex_countlayout2').change(function(){
       var val  = $(this).val();
       $('.preview-counter2').css('display','block');
       $('.preview_image2').css('display','none');
       $('#counter2_'+val).css('display','block');
      });

      
      /*
      * APEX Search form  JS
      */

      $('.apex_searchlayout').change(function(){
       var val  = $(this).val();
       $('.preview-search').css('display','block');
       $('.preview_image_search').css('display','none');
       $('#search_'+val).css('display','block');
      });

      var searchlayout = $('.apex_searchlayout option:selected').val();
       $('.preview-search').css('display','block');
       $('.preview_image_search').css('display','none');
       $('#search_'+searchlayout).css('display','block');

         /*
      * APEX Video Popup  JS
      */

      $('.apex_videolayout').change(function(){
       var val  = $(this).val();
       $('.preview-video').css('display','block');
       $('.preview_video').css('display','none');
       $('#video_'+val).css('display','block');
      });

      var video = $('.apex_videolayout option:selected').val();
       $('.preview-video').css('display','block');
       $('.preview_video').css('display','none');
       $('#video_'+video).css('display','block');


       /*
      * APEX Video Popup  JS
      */

      $('.apexnb-vidtype-bg').change(function(){
         var vtype = $(this).val();
        if(vtype == "youtube"){
           $('.apexnb-youtubeurl').show();
           $('.apexnb-vimeo-url').hide();
           $('.apexnb-upload-own-video').hide();
         }else if(vtype == "vimeo"){
           $('.apexnb-youtubeurl').hide();
           $('.apexnb-vimeo-url').show();
           $('.apexnb-upload-own-video').hide();
         }else{
            $('.apexnb-youtubeurl').hide();
           $('.apexnb-vimeo-url').hide();
           $('.apexnb-upload-own-video').show();
         }

      });

      var video_type = $('.apexnb-vidtype-bg option:selected').val();  
         if(video_type == "youtube"){
           $('.apexnb-youtubeurl').show();
           $('.apexnb-vimeo-url').hide();
           $('.apexnb-upload-own-video').hide();
         }else if(video_type == "vimeo"){
           $('.apexnb-youtubeurl').hide();
           $('.apexnb-vimeo-url').show();
           $('.apexnb-upload-own-video').hide();
         }else{
            $('.apexnb-youtubeurl').hide();
           $('.apexnb-vimeo-url').hide();
           $('.apexnb-upload-own-video').show();
         }

    //video upload
    $('.apexnb-video-html-url-button').live('click', function(e){
      e.preventDefault();
      var btnClicked = $( this );
      var video = wp.media({ 
      title: 'Insert Video',
      button: {text: 'Insert Video'},
      library: { type: 'video'},
      multiple: false
      }).open()
      .on('select', function(e){
        var uploaded_video = video.state().get('selection').first();
        // console.log(uploaded_video);
        var video_url = uploaded_video.toJSON().url;
        $( btnClicked ).closest('#edn-video-popup').find( '.apexnb-cvideo-html-url' ).val(video_url);          
      });
    });

       //Main image upload
    $('.apexnb_logoimage_url_button').live('click', function(e){
      e.preventDefault();
      var btnClicked2 = $( this );
      var image = wp.media({ 
      title: 'Insert Logo Image',
      button: {text: 'Insert Logo Image'},
      library: { type: 'image'},
      multiple: false
      }).open()
    .on('select', function(e){
      var uploaded_image = image.state().get('selection').first();
      // console.log(uploaded_image);
      var image_url = uploaded_image.toJSON().url;
      $( btnClicked2 ).closest('.logo_section').find( '.apexnb-image' ).attr('src',image_url);
      $( btnClicked2 ).closest('.logo_section').find( '.apexnb-logo-image-url' ).val(image_url);
        if( $( btnClicked2 ).closest('.logo_section').find( '.apexnb-logo-image-url' ).val(image_url)!=''){
          $( btnClicked2 ).closest('.logo_section').find('.apexnb-image-preview').show(); 
        }
        else{
          $( btnClicked2 ).closest('.logo_section').find('.apexnb-image-preview').hide(); 
        }           
      });
    });

    if (!document.getElementById("apexnb_uploadBtn")) {
    //It does not exist
    }else{
      document.getElementById("apexnb_uploadBtn").onchange = function () {
         var val = this.value;
         var pathArray = val.split('\\');
         document.getElementById("apexnb_uploadFile").value = pathArray[pathArray.length - 1];


      };
    }


      $('.apexnb-file-type').css('display','none');
          $('#apexnb-choose-file-type').change(function(){
           var filetype  = $(this).val();
           if(filetype == "upload_demofile"){
             $('.apexnb-demofile').css('display','block');
             $('.apexnb-uploadfile').css('display','none');
           }else if(filetype == "upload_customfile"){
            $('.apexnb-demofile').css('display','none');
             $('.apexnb-uploadfile').css('display','block');
             $(".apexnb-file-type1,.apexnb-file-type2").css('display','none');
           }else{
              $('.apexnb-demofile,.apexnb-uploadfile').css('display','none');
              $(".apexnb-file-type1,.apexnb-file-type2").css('display','none');
          }
        });

       
        $('.toggledDropDown').hide();


  var apexnb_ajax_url   = edn_pro_script_variable.ajaxurl;
  var apexnb_ajax_nonce = edn_pro_script_variable.ajaxnonce ;
$(".apexnb-file-type1,.apexnb-file-type2").css('display','none');
 $('#apexnb-first-choice').change(function(){
  var choice_demo = $(this).val();
   var options = '';
          $.ajax({
                    url: apexnb_ajax_url,
                    type: 'post',
                    dataType: 'json',
                    data: {
                        action:'get_demo_files',
                        first_choice :choice_demo,
                        nonce: apexnb_ajax_nonce,
                    },
                    beforeSend: function() {
                        $('.edn-ajax-loader').show('slow');
                    },
                    complete: function() {
                       $('.edn-ajax-loader').hide('slow');
                    },
                    success: function(resp) {
                    // console.log(resp);
                     $(".apexnb-file-type1").css('display','block');
                      options += '<option value="">Choose File</option>';
                     for (var i = 0; i < resp.length - 2; i++) {
                     
                         var newValue =  resp[i].replace(/-/g, " ");
                         var myString = newValue.substr(0,1).toUpperCase() + newValue.substr(1);
                         options += '<option value="' + resp[i] + '">' + myString  + '</option>';
                      }
                      
                      $("#apexnb-second-choice").html(options);

                        
                    }
                });
  
});

 $('#apexnb-second-choice').change(function(){
  var second_choice = $(this).val();
  var first_choice = $('#apexnb-first-choice option:selected').val();
   var options = '';
          $.ajax({
                    url: apexnb_ajax_url,
                    type: 'post',
                    dataType: 'json',
                    data: {
                        action:'get_demo_filess',
                        first_choice :first_choice,
                        second_choice :second_choice,
                        nonce: apexnb_ajax_nonce,
                    },
                    beforeSend: function() {
                        $('.edn-ajax-loader').show('slow');
                    },
                    complete: function() {
                       $('.edn-ajax-loader').hide('slow');
                    },
                    success: function(resp) {
                    // console.log(resp);
                    $(".apexnb-file-type2").css('display','block');
                     for (var i = 0; i < resp.length - 2; i++) {
                     
                       var newValue = resp[i].replace(/-/g, " ");
                            newValue = newValue.replace('.json', '');
                        var newValue2 = resp[i].replace('.json', '');
                         var myString = newValue.substr(0,1).toUpperCase() + newValue.substr(1);
                        options += '<option value="' +  resp[i] + '">' + myString + '</option>';
                      }
                     
                      $("#apexnb-third-choice").html(options);

                        
                    }
                });
  
});

 /*Open Panel Background Image Settings Start*/
 $('#upload_openpanel_bgimage').change(function () {
            if ($(this).is(':checked')) {
                $('.show_uploadbgimage_opanel').slideDown();          
            }else{
                $('.show_uploadbgimage_opanel').slideUp();
            }
 });

  $('.apexnb_trigger_image_button').live('click', function(e){
      e.preventDefault();
      var btnC1 = $( this );
      var image = wp.media({ 
      title: 'Insert Trigger Image',
      button: {text: 'Insert Trigger Image'},
      library: { type: 'image'},
      multiple: false
      }).open()
    .on('select', function(e){
      var trigger_image = image.state().get('selection').first();
      var trigger_img = trigger_image.toJSON().url;
      $( btnC1 ).parent('.apexnb-timg-bgwrap').find( '.apexnb-bgtimage' ).attr('src',trigger_img);
      $( btnC1 ).parent('.apexnb-timg-bgwrap').find( '.apexnb-bg-timage-url' ).val(trigger_img);
        if( $( btnC1 ).parent('.apexnb-timg-bgwrap').find( '.apexnb-bg-timage-url' ).val(trigger_img)!=''){
          $( btnC1 ).parent('.apexnb-timg-bgwrap').find('.apexnb-timage-preview').show(); 
        }
        else{
          $( btnC1 ).parent('.apexnb-timg-bgwrap').find('.apexnb-timage-preview').hide(); 
        }           
      });
    });

 $('.apexnb_bgimage_url_button').live('click', function(e){
      e.preventDefault();
      var btnC2 = $( this );
      var image = wp.media({ 
      title: 'Insert Background Image',
      button: {text: 'Insert Background Image'},
      library: { type: 'image'},
      multiple: false
      }).open()
    .on('select', function(e){
      var uploaded_image = image.state().get('selection').first();
      var bgimage_url = uploaded_image.toJSON().url;
      $( btnC2 ).parent('.apexnb-img-bgwrap').find( '.apexnb-bgimage' ).attr('src',bgimage_url);
      $( btnC2 ).parent('.apexnb-img-bgwrap').find( '.apexnb-bg-image-url' ).val(bgimage_url);
        if( $( btnC2 ).parent('.apexnb-img-bgwrap').find( '.apexnb-bg-image-url' ).val(bgimage_url)!=''){
          $( btnC2 ).parent('.apexnb-img-bgwrap').find('.apexnb-bgimage-preview').show(); 
        }
        else{
          $( btnC2 ).parent('.apexnb-img-bgwrap').find('.apexnb-bgimage-preview').hide(); 
        }           
      });
    });
    
    $('#content_type').change(function(){
       var type = $(this).val();
       if(type == "html_text"){
           $('.apexbar-text-opanel-options').show();
             $('.apexbar-widget-opanel-options').hide();
       }else{
            $('.apexbar-text-opanel-options').hide();
              $('.apexbar-widget-opanel-options').show();
       }
    });
    
    var content_type =  $('#content_type option:selected').val();
     if(content_type == "html_text"){
           $('.apexbar-text-opanel-options').show();
             $('.apexbar-widget-opanel-options').hide();
       }else{
            $('.apexbar-text-opanel-options').hide();
              $('.apexbar-widget-opanel-options').show();
       }


     $('.edn_choose_timage_type').change(function(){
        var temp_triggertype = $(this).val();
        if(temp_triggertype == "available_image"){
         $('.ednpro-available-timage').show();
         $('.show_timage_opanel').hide();
        }else{
         $('.ednpro-available-timage').hide();
         $('.show_timage_opanel').show();
        }
     });

    $('.ednpro-statusmode').change(function () {
        var value = $(this).val();
        $('.ednpro-avimage').removeClass('edn_ctimage_active');
        $(this).closest('.ednpro-avimage').addClass('edn_ctimage_active');
    });
/*Open Panel Background Image Settings END*/

     $('#edn_countdowntimer_enable_repeat').change(function () {
                if ($(this).is(':checked')) {
                    $('.edn-show-one').show();
                    $('.edn-show-two').hide();
                }else{
                     $('.edn-show-one').hide();
                    $('.edn-show-two').show();
                    
                }
            });


     /* pagination ajax */
     $('body').on('click', '.ednpro-page-trigger', function () {
       
        var page_num = ($(this).data('page-num')) ? $(this).data('page-num') : 1;
        var selected_pages = $('#edn-selected-pages').val();

        $.ajax({
            url: AjaxUrl,
            type: "POST",
            data: {
                _wpnonce: admin_nonce,
                action: 'nbar_show_on_selected_page',
                selected_pages: selected_pages,
                page_num: page_num
            },
            beforeSend: function () {
                $(".edn-ajax-loader").show();
            },
            success: function (response) {
                $('.edn-main-ajax-list-wrap').html(response);
                $(".edn-ajax-loader").hide();
            }
        });
    });
        
   	});//$(function () end
}(jQuery));
