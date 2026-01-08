# Agent OS Code Style Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` for complete Agent OS documentation and guidelines.

**Source**: `instructions/.agent-os/standards/code-style.md`

**Complete Documentation**: See `instructions/.agent-os/standards/code-style/` for detailed style guides:
- `instructions/.agent-os/standards/code-style/html-style.md` - HTML formatting rules
- `instructions/.agent-os/standards/code-style/css-style.md` - CSS/Tailwind style rules
- `instructions/.agent-os/standards/code-style/javascript-style.md` - JavaScript style rules

## General Formatting

### Indentation
- Use **2 spaces** for indentation (never tabs)
- Maintain consistent indentation throughout files
- Align nested structures for readability

### Naming Conventions
- **Methods and Variables**: Use `snake_case` (e.g., `user_profile`, `calculate_total`)
- **Classes and Modules**: Use `PascalCase` (e.g., `UserProfile`, `PaymentProcessor`)
- **Constants**: Use `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`)

### String Formatting
- Use **single quotes** for strings: `'Hello World'`
- Use **double quotes** only when interpolation is needed
- Use **template literals** for multi-line strings or complex interpolation

### Code Comments
- Add brief comments above non-obvious business logic
- Document complex algorithms or calculations
- Explain the "why" behind implementation choices
- Never remove existing comments unless removing the associated code
- Update comments when modifying code to maintain accuracy
- Keep comments concise and relevant

## HTML Style

**Source**: `instructions/.agent-os/standards/code-style/html-style.md`

### Structure Rules
- Use **2 spaces** for indentation
- Place nested elements on new lines with proper indentation
- Content between tags should be on its own line when multi-line

### Attribute Formatting
- Place each HTML attribute on its own line
- Align attributes vertically
- Keep the closing `>` on the same line as the last attribute

### Example HTML Structure
```html
<div class="container">
  <header class="flex flex-col space-y-2
                 md:flex-row md:space-y-0 md:space-x-4">
    <h1 class="text-primary dark:text-primary-300">
      Page Title
    </h1>
    <nav class="flex flex-col space-y-2
                md:flex-row md:space-y-0 md:space-x-4">
      <a href="/"
         class="btn-ghost">
        Home
      </a>
    </nav>
  </header>
</div>
```

## CSS/Tailwind Style

**Source**: `instructions/.agent-os/standards/code-style/css-style.md`

### TailwindCSS Usage
- Always use the **latest version of TailwindCSS** for all CSS
- Use **multi-line formatting** for Tailwind classes in HTML markup

### Multi-line CSS Classes Format
- Each responsive size on its own dedicated line
- Top-most line: smallest size (no responsive prefix)
- Each line below: next responsive size up
- Align CSS class lines vertically
- Focus and hover classes on their own additional dedicated lines
- Custom CSS classes at the start of the first line

### Responsive Breakpoints
- Implement additional responsive breakpoint: **'xs'** (400px)
- Standard breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

### Example Multi-line Tailwind CSS
```html
<div class="custom-cta bg-gray-50 dark:bg-gray-900 p-4 rounded cursor-pointer w-full
            hover:bg-gray-100 dark:hover:bg-gray-800
            xs:p-6
            sm:p-8 sm:font-medium
            md:p-10 md:text-lg
            lg:p-12 lg:text-xl lg:font-semibold lg:w-3/5
            xl:p-14 xl:text-2xl
            2xl:p-16 2xl:text-3xl 2xl:font-bold 2xl:w-3/4">
  I'm a call-to-action!
</div>
```

## JavaScript Style

**Source**: `instructions/.agent-os/standards/code-style/javascript-style.md`

- Follow general formatting rules (2 spaces, snake_case for variables, etc.)
- Use modern JavaScript features (ES6+)
- Follow project-specific JavaScript conventions

## CRITICAL Rules

- ✅ **Always use 2 spaces** for indentation
- ✅ **Follow naming conventions** strictly (snake_case for variables, PascalCase for classes)
- ✅ **Use TailwindCSS** for all styling (no custom CSS unless necessary)
- ✅ **Format Tailwind classes** in multi-line style for readability
- ✅ **Document complex logic** with comments explaining "why"
- ❌ **Never use tabs** for indentation
- ❌ **Never mix naming conventions** (stick to one style per type)
- ❌ **Never write inline styles** (use Tailwind classes)
