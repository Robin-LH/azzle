# Comprehensive Web Accessibility Checklist: Axe-core and IBM Equal Access Mapping

This document lists the web accessibility standards, regulations, and best practices covered by both Deque's **Axe-core** and IBM's **Equal Access Accessibility Checker** engines. Both checkers compile these checks to cover global regulations and standard coding practices.

---

## 1. Covered Standards & Regulatory Frameworks

Both tools organize checks based on the following global standards:
* **WCAG (2.0, 2.1, 2.2) Levels A, AA, AAA:** The foundational Web Content Accessibility Guidelines.
* **US Section 508:** US Federal requirements for Information and Communication Technology (ICT).
* **EN 301 549:** European standards for public sector digital accessibility (equivalent to WCAG 2.1 AA with additional functional criteria).
* **Best Practices & WAI-ARIA APG:** Non-regulatory, design-focused best practices for semantic markup, screen reader compatibility, and UX.

---

## 2. Master Rule Comparison & Mapping Matrix

### 2.1 Text Alternatives & Sensory Characteristics (WCAG 1.1, 1.3.3 / Section 508 502 / EN 9.1.1.1)

| Requirement / Standard | Axe-core Rule ID(s) | IBM Checker Rule ID(s) |
| :--- | :--- | :--- |
| **Images alternative text** (WCAG 1.1.1, 508 502.3.1, EN 9.1.1.1) | `image-alt` | `img_alt_valid` |
| **Active image maps text alternative** (WCAG 1.1.1, 508 502.3.1, EN 9.1.1.1) | `area-alt` | `area_alt_exists` |
| **Object alt description** (WCAG 1.1.1, EN 9.1.1.1) | `object-alt` | `object_alt_exists` |
| **Input image button label** (WCAG 1.1.1, 508 502.3.1, EN 9.1.1.1) | `input-image-alt` | `input_image_alt_exists` |
| **ARIA role="img" text alternative** (ARIA APG, WCAG 1.1.1) | `role-img-alt` | `aria_img_alt_exists` |
| **Sensory instructions (shape/color/size)** (WCAG 1.3.3, EN 9.1.3.3) | `sensory-and-images` | `text_sensory_misuse` |

---

### 2.2 Structure & Semantic Content (WCAG 1.3.1 / Section 508 502 / EN 9.1.3.1)

| Requirement / Standard | Axe-core Rule ID(s) | IBM Checker Rule ID(s) |
| :--- | :--- | :--- |
| **Document heading presence** (Best Practice, WCAG 1.3.1) | `page-has-heading-one` | `heading_exists` |
| **Heading element semantics** (Best Practice) | `p-as-heading` | `text_block_heading` |
| **List elements structure** (WCAG 1.3.1, EN 9.1.3.1) | `list` | `list_structure_proper` |
| **List item container** (WCAG 1.3.1, EN 9.1.3.1) | `listitem` | `listitem_parent_proper` |
| **Definition list format** (WCAG 1.3.1, EN 9.1.3.1) | `definition-list`, `dlitem` | `list_structure_proper` |
| **Data table headers** (WCAG 1.3.1, 508 502.3.1, EN 9.1.3.1) | `table-duplicate-name` | `table_caption_legend` |
| **Headers on complex tables** (WCAG 1.3.1, EN 9.1.3.1) | `td-headers-attr`, `th-has-data-cells` | `table_headers_exist` |

---

### 2.3 Contrast & Distinguishability (WCAG 1.4 / Section 508 502 / EN 9.1.4)

| Requirement / Standard | Axe-core Rule ID(s) | IBM Checker Rule ID(s) |
| :--- | :--- | :--- |
| **Minimum text contrast (4.5:1 / 3:1)** (WCAG 1.4.3, EN 9.1.4.3) | `color-contrast` | `style_color_contrast` |
| **Enhanced text contrast (7:1)** (WCAG 1.4.6 / AAA) | `color-contrast-enhanced` | `style_color_contrast` *(with policy config)* |
| **Color as single information carrier** (WCAG 1.4.1, EN 9.1.4.1) | `link-in-text-block` | `style_color_meaning` |
| **Text resize / viewport scaling** (WCAG 1.4.4, EN 9.1.4.4) | `meta-viewport` | `meta_viewport_zoom` |
| **Text spacing override** (WCAG 1.4.12, EN 9.1.4.12) | `text-spacing` | `style_text_spacing` |

---

### 2.4 Keyboard Access & Navigation (WCAG 2.1, 2.4 / Section 508 502 / EN 9.2.1, 9.2.4)

| Requirement / Standard | Axe-core Rule ID(s) | IBM Checker Rule ID(s) |
| :--- | :--- | :--- |
| **All functionality keyboard-accessible** (WCAG 2.1.1, EN 9.2.1.1) | `scrollable-region-focusable` | `element_scrollable_focusable` |
| **Nested interactive components** (Keyboard traps / WAI-ARIA) | `nested-interactive` | `aria_nested_interactive` |
| **Bypass blocks / skip link presence** (WCAG 2.4.1, EN 9.2.4.1) | `bypass` | `skip_link_exists` |
| **Iframe titles** (WCAG 2.4.1, Section 508 502.3.1) | `frame-title` | `frame_title_exists` |
| **Page has descriptive title** (WCAG 2.4.2, EN 9.2.4.2) | `document-title` | `page_title_exists` |
| **Descriptive link text** (WCAG 2.4.4, EN 9.2.4.4) | `link-name` | `link_text_exists` |
| **Focus indicator visibility** (WCAG 2.4.7, EN 9.2.4.7) | `focus-visible` | `style_focus_visible` |

---

### 2.5 Input Modalities & Timing (WCAG 2.2, 2.5 / EN 9.2.2, 9.2.5)

| Requirement / Standard | Axe-core Rule ID(s) | IBM Checker Rule ID(s) |
| :--- | :--- | :--- |
| **Prevent auto-redirect / timing** (WCAG 2.2.1, EN 9.2.2.1) | `meta-refresh` | `meta_refresh_delay` |
| **Blinking / moving content** (WCAG 2.2.2, EN 9.2.2.2) | `blink`, `marquee` | `blink_elem_deprecated`, `marquee_elem_deprecated` |
| **Pointer target sizing** (WCAG 2.5.8 / 2.2 AA) | `target-size` | `style_target_size` |

---

### 2.6 Understandable & Readability (WCAG 3.1 / EN 9.3.1)

| Requirement / Standard | Axe-core Rule ID(s) | IBM Checker Rule ID(s) |
| :--- | :--- | :--- |
| **Page language definition** (WCAG 3.1.1, EN 9.3.1.1) | `html-has-lang` | `html_lang_exists` |
| **Valid language parameters** (WCAG 3.1.1, EN 9.3.1.1) | `html-lang-valid` | `html_lang_valid` |
| **Sub-element language change** (WCAG 3.1.2, EN 9.3.1.2) | `valid-lang` | `element_lang_valid` |

---

### 2.7 ARIA Semantics & Robust Code (WCAG 4.1 / Section 508 502 / EN 9.4.1)

| Requirement / Standard | Axe-core Rule ID(s) | IBM Checker Rule ID(s) |
| :--- | :--- | :--- |
| **Unique ID references** (WCAG 4.1.1 - obsolete, EN 9.4.1.1) | `duplicate-id`, `duplicate-id-active` | `element_id_unique` |
| **ARIA hidden applied properly** (ARIA APG, WCAG 4.1.2) | `aria-hidden-body`, `aria-hidden-focus` | `aria_hidden_body_misuse`, `aria_hidden_focus_misuse` |
| **Valid ARIA roles** (WAI-ARIA, WCAG 4.1.2) | `aria-roles` | `aria_role_valid` |
| **Valid ARIA properties & states** (WAI-ARIA, WCAG 4.1.2) | `aria-valid-attr` | `aria_attribute_valid` |
| **Interactive component name/role/value** (WCAG 4.1.2, EN 9.4.1.2) | `button-name` | `button_text_exists` |

---

## 3. Best Practices & Design Usability Rules

Beyond absolute regulatory frameworks, both engines test for common web usability issues:

### 3.1 Document Headings & Landmarks
* **Axe-core Checks:**
  * `landmark-one-main`: Ensures page contains exactly one main landmark.
  * `heading-order`: Heading levels must only increase by one (`h1` followed by `h2`, not `h4`).
  * `region`: Check that all visible content is inside landmarks.
* **IBM Checker Checks:**
  * `heading_exists`: At least one heading element must exist on the page.
  * `aria_landmark_exists`: Landmark roles (`main`, `nav`, `banner`, `contentinfo`) must be used to group content blocks.

### 3.2 Viewport Configuration
* **Axe-core Checks:**
  * `meta-viewport-large`: Validates that maximum-scale allows user to resize up to at least 5x.
* **IBM Checker Checks:**
  * `meta_viewport_zoom`: Ensures viewport limits do not restrict content zoom.

### 3.3 Form Label Placement & Placeholders
* **Axe-core Checks:**
  * `form-field-multiple-labels`: Warns if form controls are bound to multiple label tags.
* **IBM Checker Checks:**
  * `input_label_visible`: Ensures placeholders are not used as the only visual label for inputs (since placeholders disappear when typing starts).
  * `aria_form_label_unique`: Multiple form sections must contain unique programmatic labels.
