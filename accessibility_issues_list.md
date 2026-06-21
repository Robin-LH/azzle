# Comprehensive Web Accessibility Checklist: Axe-core and IBM Equal Access Mapping

This document lists the web accessibility standards, regulations, and best practices covered by both Deque's **Axe-core** and IBM's **Equal Access Accessibility Checker** engines. Both checkers compile these checks to cover global regulations and standard coding practices.

---

## 1. Mapped Accessibility Checks

| Title | Standard | Axe-core Rule ID(s) | IBM Checker Rule ID(s) |
| :--- | :--- | :--- | :--- |
| **Images alternative text** | `WCAG 1.1.1`, `508 502.3.1`, `EN 9.1.1.1` | `image-alt` | `img_alt_valid` |
| **Active image maps text alternative** | `WCAG 1.1.1`, `508 502.3.1`, `EN 9.1.1.1` | `area-alt` | `area_alt_exists` |
| **Object alt description** | `WCAG 1.1.1`, `EN 9.1.1.1` | `object-alt` | `object_alt_exists` |
| **Input image button label** | `WCAG 1.1.1`, `508 502.3.1`, `EN 9.1.1.1` | `input-image-alt` | `input_image_alt_exists` |
| **ARIA role="img" text alternative** | `WAI-ARIA APG`, `WCAG 1.1.1` | `role-img-alt` | `aria_img_alt_exists` |
| **Sensory instructions (shape/color/size)** | `WCAG 1.3.3`, `EN 9.1.3.3` | `sensory-and-images` | `text_sensory_misuse` |
| **Document heading presence** | `Best Practice`, `WCAG 1.3.1` | `page-has-heading-one` | `heading_exists` |
| **Heading element semantics** | `Best Practice` | `p-as-heading` | `text_block_heading` |
| **List elements structure** | `WCAG 1.3.1`, `EN 9.1.3.1` | `list` | `list_structure_proper` |
| **List item container** | `WCAG 1.3.1`, `EN 9.1.3.1` | `listitem` | `listitem_parent_proper` |
| **Definition list format** | `WCAG 1.3.1`, `EN 9.1.3.1` | `definition-list`, `dlitem` | `list_structure_proper` |
| **Data table headers** | `WCAG 1.3.1`, `508 502.3.1`, `EN 9.1.3.1` | `table-duplicate-name` | `table_caption_legend` |
| **Headers on complex tables** | `WCAG 1.3.1`, `EN 9.1.3.1` | `td-headers-attr`, `th-has-data-cells` | `table_headers_exist` |
| **Minimum text contrast (4.5:1 / 3:1)** | `WCAG 1.4.3`, `EN 9.1.4.3` | `color-contrast` | `style_color_contrast` |
| **Enhanced text contrast (7:1)** | `WCAG 1.4.6`, `AAA` | `color-contrast-enhanced` | `style_color_contrast` *(with policy)* |
| **Color as single information carrier** | `WCAG 1.4.1`, `EN 9.1.4.1` | `link-in-text-block` | `style_color_meaning` |
| **Text resize / viewport scaling** | `WCAG 1.4.4`, `EN 9.1.4.4` | `meta-viewport` | `meta_viewport_zoom` |
| **Text spacing override** | `WCAG 1.4.12`, `EN 9.1.4.12` | `text-spacing` | `style_text_spacing` |
| **All functionality keyboard-accessible** | `WCAG 2.1.1`, `EN 9.2.1.1` | `scrollable-region-focusable` | `element_scrollable_focusable` |
| **Nested interactive components** | `WAI-ARIA APG`, `WCAG 2.1.2` | `nested-interactive` | `aria_nested_interactive` |
| **Bypass blocks / skip link presence** | `WCAG 2.4.1`, `EN 9.2.4.1` | `bypass` | `skip_link_exists` |
| **Iframe titles** | `WCAG 2.4.1`, `508 502.3.1` | `frame-title` | `frame_title_exists` |
| **Page has descriptive title** | `WCAG 2.4.2`, `EN 9.2.4.2` | `document-title` | `page_title_exists` |
| **Descriptive link text** | `WCAG 2.4.4`, `EN 9.2.4.4` | `link-name` | `link_text_exists` |
| **Focus indicator visibility** | `WCAG 2.4.7`, `EN 9.2.4.7` | `focus-visible` | `style_focus_visible` |
| **Prevent auto-redirect / timing** | `WCAG 2.2.1`, `EN 9.2.2.1` | `meta-refresh` | `meta_refresh_delay` |
| **Blinking / moving content** | `WCAG 2.2.2`, `EN 9.2.2.2` | `blink`, `marquee` | `blink_elem_deprecated`, `marquee_elem_deprecated` |
| **Pointer target sizing** | `WCAG 2.5.8`, `2.2 AA` | `target-size` | `style_target_size` |
| **Page language definition** | `WCAG 3.1.1`, `EN 9.3.1.1` | `html-has-lang` | `html_lang_exists` |
| **Valid language parameters** | `WCAG 3.1.1`, `EN 9.3.1.1` | `html-lang-valid` | `html_lang_valid` |
| **Sub-element language change** | `WCAG 3.1.2`, `EN 9.3.1.2` | `valid-lang` | `element_lang_valid` |
| **Unique ID references** | `WCAG 4.1.1`, `EN 9.4.1.1` | `duplicate-id`, `duplicate-id-active` | `element_id_unique` |
| **ARIA hidden applied properly** | `WAI-ARIA APG`, `WCAG 4.1.2` | `aria-hidden-body`, `aria-hidden-focus` | `aria_hidden_body_misuse`, `aria_hidden_focus_misuse` |
| **Valid ARIA roles** | `WAI-ARIA APG`, `WCAG 4.1.2` | `aria-roles` | `aria_role_valid` |
| **Valid ARIA properties & states** | `WAI-ARIA APG`, `WCAG 4.1.2` | `aria-valid-attr` | `aria_attribute_valid` |
| **Interactive component name/role/value** | `WCAG 4.1.2`, `EN 9.4.1.2` | `button-name` | `button_text_exists` |

---

## 2. Best Practices & Design Usability Rules

| Title | Standard / Framework | Axe-core Rule ID(s) | IBM Checker Rule ID(s) |
| :--- | :--- | :--- | :--- |
| **Single main landmark presence** | `ARIA Landmarking` | `landmark-one-main` | `aria_landmark_exists` |
| **Heading level sequence** | `Semantic Heading Outline` | `heading-order` | `heading_exists` |
| **Landmark containment** | `Semantic Layout` | `region` | `aria_landmark_exists` |
| **Form field multiple labels** | `Form Usability` | `form-field-multiple-labels` | `aria_form_label_unique` |
| **Visible inputs labels** | `Placeholder Usability` | `label` | `input_label_visible` |
