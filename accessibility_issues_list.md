# Comprehensive Accessibility Rules Checklist: Axe-core and IBM Equal Access Mapping

This document lists the web accessibility rules covered by **Axe-core (v4.7.0)** and their corresponding **IBM Equal Access Accessibility Checker** mappings. Both engines align with the W3C Web Content Accessibility Guidelines (WCAG), US Section 508, European EN 301 549, and general best practices.

## 1. Automated Accessibility Rules Matrix

| Title / Description | Standards & Tags | Axe-core Rule ID | IBM Checker Rule ID (Equivalent) |
| :--- | :--- | :--- | :--- |
| **accesskey attribute value should be unique** | `Best Practice` | `accesskeys` | `style_accesskey_unique` |
| **Active <area> elements must have alternate text** | `WCAG 2.0 A`, `WCAG 2.4.4`, `WCAG 4.1.2`, `Section 508`, `508 22.a` | `area-alt` | `area_alt_exists` |
| **Elements must only use allowed ARIA attributes** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-allowed-attr` | `aria_attribute_allowed` |
| **ARIA role should be appropriate for the element** | `Best Practice` | `aria-allowed-role` | `aria_role_allowed` |
| **ARIA commands must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-command-name` | `aria_button_name` |
| **ARIA dialog and alertdialog nodes should have an accessible name** | `Best Practice` | `aria-dialog-name` | `aria_dialog_name` |
| **aria-hidden='true' must not be present on the document body** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-hidden-body` | `aria_hidden_body_misuse` |
| **ARIA hidden element must not be focusable or contain focusable elements** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-hidden-focus` | `aria_hidden_focus_misuse` |
| **ARIA input fields must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-input-field-name` | `input_label_exists` |
| **ARIA meter nodes must have an accessible name** | `WCAG 2.0 A`, `WCAG 1.1.1` | `aria-meter-name` | `aria_meter_name` |
| **ARIA progressbar nodes must have an accessible name** | `WCAG 2.0 A`, `WCAG 1.1.1` | `aria-progressbar-name` | `aria_progressbar_name` |
| **Required ARIA attributes must be provided** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-required-attr` | `aria_attribute_required` |
| **Certain ARIA roles must contain particular children** | `WCAG 2.0 A`, `WCAG 1.3.1` | `aria-required-children` | `aria_child_required` |
| **Certain ARIA roles must be contained by particular parents** | `WCAG 2.0 A`, `WCAG 1.3.1` | `aria-required-parent` | `aria_parent_required` |
| **aria-roledescription must be on elements with a semantic role** | `WCAG 2.0 A`, `WCAG 4.1.2`, `deprecated` | `aria-roledescription` | *N/A (Axe Specific)* |
| **ARIA roles used must conform to valid values** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-roles` | `aria_role_valid` |
| **"role=text" should have no focusable descendants** | `Best Practice` | `aria-text` | *N/A (Axe Specific)* |
| **ARIA toggle fields must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-toggle-field-name` | `input_label_exists` |
| **ARIA tooltip nodes must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-tooltip-name` | `aria_tooltip_name` |
| **ARIA treeitem nodes should have an accessible name** | `Best Practice` | `aria-treeitem-name` | `aria_treeitem_name` |
| **ARIA attributes must conform to valid values** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-valid-attr-value` | `aria_attribute_value_valid` |
| **ARIA attributes must conform to valid names** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-valid-attr` | `aria_attribute_valid` |
| **<audio> elements must have a captions track** | `WCAG 2.0 A`, `WCAG 1.2.1`, `Section 508`, `508 22.a`, `deprecated` | `audio-caption` | `video_caption_exists` |
| **autocomplete attribute must be used correctly** | `WCAG 2.1 AA`, `WCAG 1.3.5` | `autocomplete-valid` | `input_autocomplete_valid` |
| **Inline text spacing must be adjustable with custom stylesheets** | `WCAG 2.1 AA`, `WCAG 1412` | `avoid-inline-spacing` | `style_text_spacing` |
| **<blink> elements are deprecated and must not be used** | `WCAG 2.0 A`, `WCAG 2.2.2`, `Section 508`, `508 22.j` | `blink` | `blink_elem_deprecated` |
| **Buttons must have discernible text** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.a` | `button-name` | `button_text_exists` |
| **Page must have means to bypass repeated blocks** | `WCAG 2.0 A`, `WCAG 2.4.1`, `Section 508`, `508 22.o` | `bypass` | `skip_link_exists` |
| **Elements must meet enhanced color contrast ratio thresholds** | `WCAG 2.0 AAA`, `WCAG 1.4.6` | `color-contrast-enhanced` | `style_color_contrast` |
| **Elements must meet minimum color contrast ratio thresholds** | `WCAG 2.a.a`, `WCAG 1.4.3` | `color-contrast` | `style_color_contrast` |
| **CSS Media queries must not lock display orientation** | `WCAG 1.3.4`, `WCAG 2.1 AA`, `experimental` | `css-orientation-lock` | *N/A (Axe Specific)* |
| **<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements** | `WCAG 2.0 A`, `WCAG 1.3.1` | `definition-list` | `list_structure_proper` |
| **<dt> and <dd> elements must be contained by a <dl>** | `WCAG 2.0 A`, `WCAG 1.3.1` | `dlitem` | `listitem_parent_proper` |
| **Documents must have <title> element to aid in navigation** | `WCAG 2.0 A`, `WCAG 2.4.2` | `document-title` | `page_title_exists` |
| **IDs of active elements must be unique** | `WCAG 2.0 A`, `WCAG 4.1.1` | `duplicate-id-active` | `element_id_unique` |
| **IDs used in ARIA and labels must be unique** | `WCAG 2.0 A`, `WCAG 4.1.1` | `duplicate-id-aria` | `element_id_unique` |
| **id attribute value must be unique** | `WCAG 2.0 A`, `WCAG 4.1.1` | `duplicate-id` | `element_id_unique` |
| **Headings should not be empty** | `Best Practice` | `empty-heading` | `heading_exists` |
| **Table header text should not be empty** | `Best Practice` | `empty-table-header` | `table_headers_exist` |
| **Elements in the focus order should have an appropriate role** | `Best Practice`, `experimental` | `focus-order-semantics` | *N/A (Axe Specific)* |
| **Form field must not have multiple label elements** | `WCAG 2.0 A`, `WCAG 3.3.2` | `form-field-multiple-labels` | *N/A (Axe Specific)* |
| **Frames with focusable content must not have tabindex=-1** | `WCAG 2.0 A`, `WCAG 2.1.1` | `frame-focusable-content` | *N/A (Axe Specific)* |
| **Frames should be tested with axe-core** | `review-item`, `Best Practice` | `frame-tested` | `frame_title_exists` |
| **Frames must have a unique title attribute** | `WCAG 4.1.2`, `WCAG 2.0 A` | `frame-title-unique` | *N/A (Axe Specific)* |
| **Frames must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.i` | `frame-title` | `frame_title_exists` |
| **Heading levels should only increase by one** | `Best Practice` | `heading-order` | `heading_exists` |
| **Hidden content on the page should be analyzed** | `experimental`, `review-item`, `Best Practice` | `hidden-content` | *N/A (Axe Specific)* |
| **<html> element must have a lang attribute** | `WCAG 2.0 A`, `WCAG 3.1.1` | `html-has-lang` | `html_lang_exists` |
| **<html> element must have a valid value for the lang attribute** | `WCAG 2.0 A`, `WCAG 3.1.1` | `html-lang-valid` | `html_lang_valid` |
| **HTML elements with lang and xml:lang must have the same base language** | `WCAG 2.0 A`, `WCAG 3.1.1` | `html-xml-lang-mismatch` | `html_lang_valid` |
| **Links with the same name must have a similar purpose** | `WCAG 2.0 AAA`, `WCAG 2.4.9` | `identical-links-same-purpose` | `link_text_exists` |
| **Images must have alternate text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `Section 508`, `508 22.a` | `image-alt` | `img_alt_valid` |
| **Alternative text of images should not be repeated as text** | `Best Practice` | `image-redundant-alt` | `img_alt_valid` |
| **Input buttons must have discernible text** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.a` | `input-button-name` | `button_text_exists` |
| **Image buttons must have alternate text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `WCAG 4.1.2`, `Section 508`, `508 22.a` | `input-image-alt` | `input_image_alt_exists` |
| **Elements must have their visible text as part of their accessible name** | `WCAG 2.1.a`, `WCAG 2.5.3`, `experimental` | `label-content-name-mismatch` | *N/A (Axe Specific)* |
| **Form elements should have a visible label** | `Best Practice` | `label-title-only` | *N/A (Axe Specific)* |
| **Form elements must have labels** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.n` | `label` | `input_label_exists` |
| **Banner landmark should not be contained in another landmark** | `Best Practice` | `landmark-banner-is-top-level` | `aria_landmark_exists` |
| **Aside should not be contained in another landmark** | `Best Practice` | `landmark-complementary-is-top-level` | `aria_landmark_exists` |
| **Contentinfo landmark should not be contained in another landmark** | `Best Practice` | `landmark-contentinfo-is-top-level` | `aria_landmark_exists` |
| **Main landmark should not be contained in another landmark** | `Best Practice` | `landmark-main-is-top-level` | `aria_landmark_exists` |
| **Document should not have more than one banner landmark** | `Best Practice` | `landmark-no-duplicate-banner` | `aria_landmark_exists` |
| **Document should not have more than one contentinfo landmark** | `Best Practice` | `landmark-no-duplicate-contentinfo` | `aria_landmark_exists` |
| **Document should not have more than one main landmark** | `Best Practice` | `landmark-no-duplicate-main` | `aria_landmark_exists` |
| **Document should have one main landmark** | `Best Practice` | `landmark-one-main` | `aria_landmark_exists` |
| **Ensures landmarks are unique** | `Best Practice` | `landmark-unique` | `aria_landmark_exists` |
| **Links must be distinguishable without relying on color** | `WCAG 2.0 A`, `WCAG 1.4.1` | `link-in-text-block` | `style_color_meaning` |
| **Links must have discernible text** | `WCAG 2.0 A`, `WCAG 4.1.2`, `WCAG 2.4.4`, `Section 508`, `508 22.a` | `link-name` | `link_text_exists` |
| **<ul> and <ol> must only directly contain <li>, <script> or <template> elements** | `WCAG 2.0 A`, `WCAG 1.3.1` | `list` | `list_structure_proper` |
| **<li> elements must be contained in a <ul> or <ol>** | `WCAG 2.0 A`, `WCAG 1.3.1` | `listitem` | `listitem_parent_proper` |
| **<marquee> elements are deprecated and must not be used** | `WCAG 2.0 A`, `WCAG 2.2.2` | `marquee` | `marquee_elem_deprecated` |
| **Delayed refresh must not be used** | `WCAG 2.0 AAA`, `WCAG 2.2.4`, `WCAG 3.2.5` | `meta-refresh-no-exceptions` | `meta_refresh_delay` |
| **Delayed refresh under 20 hours must not be used** | `WCAG 2.0 A`, `WCAG 2.2.1` | `meta-refresh` | `meta_refresh_delay` |
| **Users should be able to zoom and scale the text up to 500%** | `Best Practice` | `meta-viewport-large` | `meta_viewport_zoom` |
| **Zooming and scaling must not be disabled** | `WCAG 2.a.a`, `WCAG 1.4.4` | `meta-viewport` | `meta_viewport_zoom` |
| **Interactive controls must not be nested** | `WCAG 2.0 A`, `WCAG 4.1.2` | `nested-interactive` | `aria_nested_interactive` |
| **<video> or <audio> elements must not play automatically** | `WCAG 2.0 A`, `WCAG 1.4.2` | `no-autoplay-audio` | `video_caption_exists` |
| **<object> elements must have alternate text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `Section 508`, `508 22.a` | `object-alt` | `object_alt_exists` |
| **Styled <p> elements must not be used as headings** | `WCAG 2.0 A`, `WCAG 1.3.1`, `experimental` | `p-as-heading` | `text_block_heading` |
| **Page should contain a level-one heading** | `Best Practice` | `page-has-heading-one` | `heading_exists` |
| **Ensure elements marked as presentational are consistently ignored** | `Best Practice` | `presentation-role-conflict` | `aria_role_allowed` |
| **All page content should be contained by landmarks** | `Best Practice` | `region` | `aria_landmark_exists` |
| **[role='img'] elements must have an alternative text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `Section 508`, `508 22.a` | `role-img-alt` | `aria_img_alt_exists` |
| **scope attribute should be used correctly** | `Best Practice` | `scope-attr-valid` | `table_headers_exist` |
| **Scrollable region must have keyboard access** | `WCAG 2.0 A`, `WCAG 2.1.1` | `scrollable-region-focusable` | `element_scrollable_focusable` |
| **Select element must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.n` | `select-name` | `input_label_exists` |
| **Server-side image maps must not be used** | `WCAG 2.0 A`, `WCAG 2.1.1`, `Section 508`, `508 22.f` | `server-side-image-map` | `area_alt_exists` |
| **The skip-link target should exist and be focusable** | `Best Practice` | `skip-link` | `skip_link_exists` |
| **<svg> elements with an img role must have an alternative text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `Section 508`, `508 22.a` | `svg-img-alt` | `aria_img_alt_exists` |
| **Elements should not have tabindex greater than zero** | `Best Practice` | `tabindex` | `aria_child_tabindex_proper` |
| **tables should not have the same summary and caption** | `Best Practice` | `table-duplicate-name` | `table_caption_legend` |
| **Data or header cells must not be used to give caption to a data table.** | `experimental`, `WCAG 2.0 A`, `WCAG 1.3.1`, `Section 508`, `508 22.g` | `table-fake-caption` | `table_caption_legend` |
| **All touch targets must be 24px large, or leave sufficient space** | `WCAG 2.2 AA`, `WCAG 2.5.8` | `target-size` | `style_target_size` |
| **Non-empty <td> elements in larger <table> must have an associated table header** | `experimental`, `WCAG 2.0 A`, `WCAG 1.3.1`, `Section 508`, `508 22.g` | `td-has-header` | `table_headers_exist` |
| **Table cells that use the headers attribute must only refer to cells in the same table** | `WCAG 2.0 A`, `WCAG 1.3.1`, `Section 508`, `508 22.g` | `td-headers-attr` | `table_headers_exist` |
| **Table headers in a data table must refer to data cells** | `WCAG 2.0 A`, `WCAG 1.3.1`, `Section 508`, `508 22.g`, `14.b` | `th-has-data-cells` | `table_headers_exist` |
| **lang attribute must have a valid value** | `WCAG 2.a.a`, `WCAG 3.1.2` | `valid-lang` | `element_lang_valid` |
| **<video> elements must have captions** | `WCAG 2.0 A`, `WCAG 1.2.2`, `Section 508`, `508 22.a` | `video-caption` | `track_kind_captions` |
