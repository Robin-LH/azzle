# Comprehensive Accessibility Rules Checklist: Axe-core and IBM Equal Access Mapping

This document lists the web accessibility rules covered by **Axe-core (v4.7.0)** and their corresponding **IBM Equal Access Accessibility Checker** mappings. Both engines align with the W3C Web Content Accessibility Guidelines (WCAG), US Section 508, European EN 301 549, and general best practices.

## Automated Accessibility Rules Matrix

| Sl. | Title | Standards & Tags | Axe-core Rule ID | IBM Rule ID | IBM Accessibility Requirement |
| :-- | :------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- | :------------------------------------ | :----------------------------- | :------------------------------------ |
| 1 | **accesskey attribute value should be unique** | `Best Practice` | `accesskeys` | `style_accesskey_unique` | `N/A (Best Practice)` |
| 2 | **Active `<area>` elements must have alternate text** | `WCAG 2.0 A`, `WCAG 2.4.4`, `WCAG 4.1.2`, `Section 508`, `508 22.a` | `area-alt` | `area_alt_exists` | `2.4.4 Link Purpose (In Context)`, `4.1.2 Name, Role, Value`, `502.3.1 Object Information` |
| 3 | **Elements must only use allowed ARIA attributes** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-allowed-attr` | `aria_attribute_allowed` | `4.1.2 Name, Role, Value` |
| 4 | **ARIA role should be appropriate for the element** | `Best Practice` | `aria-allowed-role` | `aria_role_allowed` | `N/A (Best Practice)` |
| 5 | **ARIA commands must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-command-name` | `aria_button_name` | `4.1.2 Name, Role, Value` |
| 6 | **ARIA dialog and alertdialog nodes should have an accessible name** | `Best Practice` | `aria-dialog-name` | `aria_dialog_name` | `N/A (Best Practice)` |
| 7 | **aria-hidden='true' must not be present on the document body** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-hidden-body` | `aria_hidden_body_misuse` | `4.1.2 Name, Role, Value` |
| 8 | **ARIA hidden element must not be focusable or contain focusable elements** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-hidden-focus` | `aria_hidden_focus_misuse` | `4.1.2 Name, Role, Value` |
| 9 | **ARIA input fields must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-input-field-name` | `input_label_exists` | `4.1.2 Name, Role, Value` |
| 10 | **ARIA meter nodes must have an accessible name** | `WCAG 2.0 A`, `WCAG 1.1.1` | `aria-meter-name` | `aria_meter_name` | `1.1.1 Non-text Content` |
| 11 | **ARIA progressbar nodes must have an accessible name** | `WCAG 2.0 A`, `WCAG 1.1.1` | `aria-progressbar-name` | `aria_progressbar_name` | `1.1.1 Non-text Content` |
| 12 | **Required ARIA attributes must be provided** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-required-attr` | `aria_attribute_required` | `4.1.2 Name, Role, Value` |
| 13 | **Certain ARIA roles must contain particular children** | `WCAG 2.0 A`, `WCAG 1.3.1` | `aria-required-children` | `aria_child_required` | `1.3.1 Info and Relationships` |
| 14 | **Certain ARIA roles must be contained by particular parents** | `WCAG 2.0 A`, `WCAG 1.3.1` | `aria-required-parent` | `aria_parent_required` | `1.3.1 Info and Relationships` |
| 15 | **aria-roledescription must be on elements with a semantic role** | `WCAG 2.0 A`, `WCAG 4.1.2`, `deprecated` | `aria-roledescription` | _N/A (Axe Specific)_ | `4.1.2 Name, Role, Value` |
| 16 | **ARIA roles used must conform to valid values** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-roles` | `aria_role_valid` | `4.1.2 Name, Role, Value` |
| 17 | **"role=text" should have no focusable descendants** | `Best Practice` | `aria-text` | _N/A (Axe Specific)_ | `N/A (Best Practice)` |
| 18 | **ARIA toggle fields must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-toggle-field-name` | `input_label_exists` | `4.1.2 Name, Role, Value` |
| 19 | **ARIA tooltip nodes must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-tooltip-name` | `aria_tooltip_name` | `4.1.2 Name, Role, Value` |
| 20 | **ARIA treeitem nodes should have an accessible name** | `Best Practice` | `aria-treeitem-name` | `aria_treeitem_name` | `N/A (Best Practice)` |
| 21 | **ARIA attributes must conform to valid values** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-valid-attr-value` | `aria_attribute_value_valid` | `4.1.2 Name, Role, Value` |
| 22 | **ARIA attributes must conform to valid names** | `WCAG 2.0 A`, `WCAG 4.1.2` | `aria-valid-attr` | `aria_attribute_valid` | `4.1.2 Name, Role, Value` |
| 23 | **`<audio>` elements must have a captions track** | `WCAG 2.0 A`, `WCAG 1.2.1`, `Section 508`, `508 22.a`, `deprecated` | `audio-caption` | `video_caption_exists` | `1.2.1 Audio-only and Video-only (Prerecorded)`, `502.3.1 Object Information` |
| 24 | **autocomplete attribute must be used correctly** | `WCAG 2.1 AA`, `WCAG 1.3.5` | `autocomplete-valid` | `input_autocomplete_valid` | `1.3.5 Identify Input Purpose` |
| 25 | **Inline text spacing must be adjustable with custom stylesheets** | `WCAG 2.1 AA`, `WCAG 1412` | `avoid-inline-spacing` | `style_text_spacing` | `1.4.12 Text Spacing` |
| 26 | **`<blink>` elements are deprecated and must not be used** | `WCAG 2.0 A`, `WCAG 2.2.2`, `Section 508`, `508 22.j` | `blink` | `blink_elem_deprecated` | `2.2.2 Pause, Stop, Hide` |
| 27 | **Buttons must have discernible text** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.a` | `button-name` | `button_text_exists` | `4.1.2 Name, Role, Value`, `502.3.1 Object Information` |
| 28 | **Page must have means to bypass repeated blocks** | `WCAG 2.0 A`, `WCAG 2.4.1`, `Section 508`, `508 22.o` | `bypass` | `skip_link_exists` | `2.4.1 Bypass Blocks` |
| 29 | **Elements must meet enhanced color contrast ratio thresholds** | `WCAG 2.0 AAA`, `WCAG 1.4.6` | `color-contrast-enhanced` | `style_color_contrast` | `1.4.6 Contrast (Enhanced)` |
| 30 | **Elements must meet minimum color contrast ratio thresholds** | `WCAG 2.a.a`, `WCAG 1.4.3` | `color-contrast` | `style_color_contrast` | `1.4.3 Contrast (Minimum)` |
| 31 | **CSS Media queries must not lock display orientation** | `WCAG 1.3.4`, `WCAG 2.1 AA`, `experimental` | `css-orientation-lock` | _N/A (Axe Specific)_ | `1.3.4 Orientation` |
| 32 | **`<dl>` elements must only directly contain properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements** | `WCAG 2.0 A`, `WCAG 1.3.1` | `definition-list` | `list_structure_proper` | `1.3.1 Info and Relationships` |
| 33 | **`<dt>` and `<dd>` elements must be contained by a `<dl>`** | `WCAG 2.0 A`, `WCAG 1.3.1` | `dlitem` | `listitem_parent_proper` | `1.3.1 Info and Relationships` |
| 34 | **Documents must have `<title>` element to aid in navigation** | `WCAG 2.0 A`, `WCAG 2.4.2` | `document-title` | `page_title_exists` | `2.4.2 Page Titled` |
| 35 | **IDs of active elements must be unique** | `WCAG 2.0 A`, `WCAG 4.1.1` | `duplicate-id-active` | `element_id_unique` | `4.1.1 Parsing` |
| 36 | **IDs used in ARIA and labels must be unique** | `WCAG 2.0 A`, `WCAG 4.1.1` | `duplicate-id-aria` | `element_id_unique` | `4.1.1 Parsing` |
| 37 | **id attribute value must be unique** | `WCAG 2.0 A`, `WCAG 4.1.1` | `duplicate-id` | `element_id_unique` | `4.1.1 Parsing` |
| 38 | **Headings should not be empty** | `Best Practice` | `empty-heading` | `heading_exists` | `N/A (Best Practice)` |
| 39 | **Table header text should not be empty** | `Best Practice` | `empty-table-header` | `table_headers_exist` | `N/A (Best Practice)` |
| 40 | **Elements in the focus order should have an appropriate role** | `Best Practice`, `experimental` | `focus-order-semantics` | _N/A (Axe Specific)_ | `N/A (Best Practice)` |
| 41 | **Form field must not have multiple label elements** | `WCAG 2.0 A`, `WCAG 3.3.2` | `form-field-multiple-labels` | _N/A (Axe Specific)_ | `3.3.2 Labels or Instructions` |
| 42 | **Frames with focusable content must not have tabindex=-1** | `WCAG 2.0 A`, `WCAG 2.1.1` | `frame-focusable-content` | _N/A (Axe Specific)_ | `2.1.1 Keyboard` |
| 43 | **Frames should be tested with axe-core** | `review-item`, `Best Practice` | `frame-tested` | `frame_title_exists` | `N/A (Best Practice)` |
| 44 | **Frames must have a unique title attribute** | `WCAG 4.1.2`, `WCAG 2.0 A` | `frame-title-unique` | _N/A (Axe Specific)_ | `4.1.2 Name, Role, Value` |
| 45 | **Frames must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.i` | `frame-title` | `frame_title_exists` | `4.1.2 Name, Role, Value`, `502.3.1 Object Information` |
| 46 | **Heading levels should only increase by one** | `Best Practice` | `heading-order` | `heading_exists` | `N/A (Best Practice)` |
| 47 | **Hidden content on the page should be analyzed** | `experimental`, `review-item`, `Best Practice` | `hidden-content` | _N/A (Axe Specific)_ | `N/A (Best Practice)` |
| 48 | **`<html>` element must have a lang attribute** | `WCAG 2.0 A`, `WCAG 3.1.1` | `html-has-lang` | `html_lang_exists` | `3.1.1 Language of Page` |
| 49 | **`<html>` element must have a valid value for the lang attribute** | `WCAG 2.0 A`, `WCAG 3.1.1` | `html-lang-valid` | `html_lang_valid` | `3.1.1 Language of Page` |
| 50 | **HTML elements with lang and xml:lang must have the same base language** | `WCAG 2.0 A`, `WCAG 3.1.1` | `html-xml-lang-mismatch` | `html_lang_valid` | `3.1.1 Language of Page` |
| 51 | **Links with the same name must have a similar purpose** | `WCAG 2.0 AAA`, `WCAG 2.4.9` | `identical-links-same-purpose` | `link_text_exists` | `2.4.9 Link Purpose (Link Only)` |
| 52 | **Images must have alternate text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `Section 508`, `508 22.a` | `image-alt` | `img_alt_valid` | `1.1.1 Non-text Content`, `502.3.1 Object Information` |
| 53 | **Alternative text of images should not be repeated as text** | `Best Practice` | `image-redundant-alt` | `img_alt_valid` | `N/A (Best Practice)` |
| 54 | **Input buttons must have discernible text** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.a` | `input-button-name` | `button_text_exists` | `4.1.2 Name, Role, Value`, `502.3.1 Object Information` |
| 55 | **Image buttons must have alternate text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `WCAG 4.1.2`, `Section 508`, `508 22.a` | `input-image-alt` | `input_image_alt_exists` | `1.1.1 Non-text Content`, `4.1.2 Name, Role, Value`, `502.3.1 Object Information` |
| 56 | **Elements must have their visible text as part of their accessible name** | `WCAG 2.1.a`, `WCAG 2.5.3`, `experimental` | `label-content-name-mismatch` | _N/A (Axe Specific)_ | `2.5.3 Label in Name` |
| 57 | **Form elements should have a visible label** | `Best Practice` | `label-title-only` | _N/A (Axe Specific)_ | `N/A (Best Practice)` |
| 58 | **Form elements must have labels** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.n` | `label` | `input_label_exists` | `4.1.2 Name, Role, Value`, `502.3.6 Label Relationships` |
| 59 | **Banner landmark should not be contained in another landmark** | `Best Practice` | `landmark-banner-is-top-level` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 60 | **Aside should not be contained in another landmark** | `Best Practice` | `landmark-complementary-is-top-level` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 61 | **Contentinfo landmark should not be contained in another landmark** | `Best Practice` | `landmark-contentinfo-is-top-level` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 62 | **Main landmark should not be contained in another landmark** | `Best Practice` | `landmark-main-is-top-level` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 63 | **Document should not have more than one banner landmark** | `Best Practice` | `landmark-no-duplicate-banner` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 64 | **Document should not have more than one contentinfo landmark** | `Best Practice` | `landmark-no-duplicate-contentinfo` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 65 | **Document should not have more than one main landmark** | `Best Practice` | `landmark-no-duplicate-main` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 66 | **Document should have one main landmark** | `Best Practice` | `landmark-one-main` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 67 | **Ensures landmarks are unique** | `Best Practice` | `landmark-unique` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 68 | **Links must be distinguishable without relying on color** | `WCAG 2.0 A`, `WCAG 1.4.1` | `link-in-text-block` | `style_color_meaning` | `1.4.1 Use of Color` |
| 69 | **Links must have discernible text** | `WCAG 2.0 A`, `WCAG 4.1.2`, `WCAG 2.4.4`, `Section 508`, `508 22.a` | `link-name` | `link_text_exists` | `4.1.2 Name, Role, Value`, `2.4.4 Link Purpose (In Context)`, `502.3.1 Object Information` |
| 70 | **`<ul>` and `<ol>` must only directly contain `<li>`, `<script>` or `<template>` elements** | `WCAG 2.0 A`, `WCAG 1.3.1` | `list` | `list_structure_proper` | `1.3.1 Info and Relationships` |
| 71 | **`<li>` elements must be contained in a `<ul>` or `<ol>`** | `WCAG 2.0 A`, `WCAG 1.3.1` | `listitem` | `listitem_parent_proper` | `1.3.1 Info and Relationships` |
| 72 | **`<marquee>` elements are deprecated and must not be used** | `WCAG 2.0 A`, `WCAG 2.2.2` | `marquee` | `marquee_elem_deprecated` | `2.2.2 Pause, Stop, Hide` |
| 73 | **Delayed refresh must not be used** | `WCAG 2.0 AAA`, `WCAG 2.2.4`, `WCAG 3.2.5` | `meta-refresh-no-exceptions` | `meta_refresh_delay` | `WCAG 2.2.4`, `3.2.5 Change on Request` |
| 74 | **Delayed refresh under 20 hours must not be used** | `WCAG 2.0 A`, `WCAG 2.2.1` | `meta-refresh` | `meta_refresh_delay` | `2.2.1 Timing Adjustable` |
| 75 | **Users should be able to zoom and scale the text up to 500%** | `Best Practice` | `meta-viewport-large` | `meta_viewport_zoom` | `N/A (Best Practice)` |
| 76 | **Zooming and scaling must not be disabled** | `WCAG 2.a.a`, `WCAG 1.4.4` | `meta-viewport` | `meta_viewport_zoom` | `1.4.4 Resize Text` |
| 77 | **Interactive controls must not be nested** | `WCAG 2.0 A`, `WCAG 4.1.2` | `nested-interactive` | `aria_nested_interactive` | `4.1.2 Name, Role, Value` |
| 78 | **`<video>` or `<audio>` elements must not play automatically** | `WCAG 2.0 A`, `WCAG 1.4.2` | `no-autoplay-audio` | `video_caption_exists` | `1.4.2 Audio Control` |
| 79 | **`<object>` elements must have alternate text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `Section 508`, `508 22.a` | `object-alt` | `object_alt_exists` | `1.1.1 Non-text Content`, `502.3.1 Object Information` |
| 80 | **Styled `<p>` elements must not be used as headings** | `WCAG 2.0 A`, `WCAG 1.3.1`, `experimental` | `p-as-heading` | `text_block_heading` | `1.3.1 Info and Relationships` |
| 81 | **Page should contain a level-one heading** | `Best Practice` | `page-has-heading-one` | `heading_exists` | `N/A (Best Practice)` |
| 82 | **Ensure elements marked as presentational are consistently ignored** | `Best Practice` | `presentation-role-conflict` | `aria_role_allowed` | `N/A (Best Practice)` |
| 83 | **All page content should be contained by landmarks** | `Best Practice` | `region` | `aria_landmark_exists` | `N/A (Best Practice)` |
| 84 | **[role='img'] elements must have an alternative text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `Section 508`, `508 22.a` | `role-img-alt` | `aria_img_alt_exists` | `1.1.1 Non-text Content`, `502.3.1 Object Information` |
| 85 | **scope attribute should be used correctly** | `Best Practice` | `scope-attr-valid` | `table_headers_exist` | `N/A (Best Practice)` |
| 86 | **Scrollable region must have keyboard access** | `WCAG 2.0 A`, `WCAG 2.1.1` | `scrollable-region-focusable` | `element_scrollable_focusable` | `2.1.1 Keyboard` |
| 87 | **Select element must have an accessible name** | `WCAG 2.0 A`, `WCAG 4.1.2`, `Section 508`, `508 22.n` | `select-name` | `input_label_exists` | `4.1.2 Name, Role, Value`, `502.3.6 Label Relationships` |
| 88 | **Server-side image maps must not be used** | `WCAG 2.0 A`, `WCAG 2.1.1`, `Section 508`, `508 22.f` | `server-side-image-map` | `area_alt_exists` | `2.1.1 Keyboard`, `502.3.1 Object Information` |
| 89 | **The skip-link target should exist and be focusable** | `Best Practice` | `skip-link` | `skip_link_exists` | `N/A (Best Practice)` |
| 90 | **`<svg>` elements with an img role must have an alternative text** | `WCAG 2.0 A`, `WCAG 1.1.1`, `Section 508`, `508 22.a` | `svg-img-alt` | `aria_img_alt_exists` | `1.1.1 Non-text Content`, `502.3.1 Object Information` |
| 91 | **Elements should not have tabindex greater than zero** | `Best Practice` | `tabindex` | `aria_child_tabindex_proper` | `N/A (Best Practice)` |
| 92 | **tables should not have the same summary and caption** | `Best Practice` | `table-duplicate-name` | `table_caption_legend` | `N/A (Best Practice)` |
| 93 | **Data or header cells must not be used to give caption to a data table.** | `experimental`, `WCAG 2.0 A`, `WCAG 1.3.1`, `Section 508`, `508 22.g` | `table-fake-caption` | `table_caption_legend` | `1.3.1 Info and Relationships`, `502.3.3 Row, Column, and Headers` |
| 94 | **All touch targets must be 24px large, or leave sufficient space** | `WCAG 2.2 AA`, `WCAG 2.5.8` | `target-size` | `style_target_size` | `2.5.8 Target Size (Minimum)` |
| 95 | **Non-empty `<td>` elements in larger `<table>` must have an associated table header** | `experimental`, `WCAG 2.0 A`, `WCAG 1.3.1`, `Section 508`, `508 22.g` | `td-has-header` | `table_headers_exist` | `1.3.1 Info and Relationships`, `502.3.3 Row, Column, and Headers` |
| 96 | **Table cells that use the headers attribute must only refer to cells in the same table** | `WCAG 2.0 A`, `WCAG 1.3.1`, `Section 508`, `508 22.g` | `td-headers-attr` | `table_headers_exist` | `1.3.1 Info and Relationships`, `502.3.3 Row, Column, and Headers` |
| 97 | **Table headers in a data table must refer to data cells** | `WCAG 2.0 A`, `WCAG 1.3.1`, `Section 508`, `508 22.g`, `14.b` | `th-has-data-cells` | `table_headers_exist` | `1.3.1 Info and Relationships`, `502.3.3 Row, Column, and Headers` |
| 98 | **lang attribute must have a valid value** | `WCAG 2.a.a`, `WCAG 3.1.2` | `valid-lang` | `element_lang_valid` | `3.1.2 Language of Parts` |
| 99 | **`<video>` elements must have captions** | `WCAG 2.0 A`, `WCAG 1.2.2`, `Section 508`, `508 22.a` | `video-caption` | `track_kind_captions` | `1.2.2 Captions (Prerecorded)`, `502.3.1 Object Information` |
