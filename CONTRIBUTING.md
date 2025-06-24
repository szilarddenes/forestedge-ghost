# Contributing to Forest Edge Ghost Theme

Thank you for your interest in contributing to Forest Edge! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Local Ghost installation (5.0+)
- Git
- Basic knowledge of Handlebars, CSS, and JavaScript

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/forestedge-ghost.git
   cd forestedge-ghost
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Link to Ghost**
   ```bash
   # Link theme to your Ghost installation
   ln -s $(pwd) /var/lib/ghost/content/themes/forestedge-dev
   ```

4. **Start Development**
   ```bash
   # Watch for changes
   npm run watch
   
   # In another terminal, start Ghost
   ghost restart --development
   ```

## 🎨 Design Principles

### Forest Edge Identity
- **Bold & Creative**: Inspired by Snook theme's striking design
- **Photography-First**: Optimized for visual storytelling
- **Sustainable Focus**: Colors and imagery reflect nature
- **Performance**: Fast loading, optimized animations
- **Accessibility**: WCAG 2.1 compliant

### Color Palette
```css
--forest-green: #2d5a3d;   /* Primary brand color */
--sage-green: #9caf88;     /* Secondary accent */
--accent-gold: #daa520;    /* Call-to-action color */
--earth-brown: #8b4513;    /* Natural accent */
--warm-white: #faf9f6;     /* Background */
--charcoal: #2c2c2c;       /* Text color */
```

### Typography
- **Headlines**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Code**: SF Mono (monospace)

## 📝 Code Style

### HTML/Handlebars
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Follow Ghost's Handlebars conventions
- Comment complex template logic

### CSS
- Use CSS custom properties for theming
- Follow BEM methodology for class naming
- Mobile-first responsive design
- Use logical properties where supported

### JavaScript
- ES6+ syntax
- Progressive enhancement
- No jQuery dependency
- Document complex functions

## 🔧 Development Workflow

### File Structure
```
forestedge-ghost/
├── assets/
│   ├── css/
│   │   └── screen.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── partials/
│   ├── header.hbs
│   ├── footer.hbs
│   ├── post-card.hbs
│   └── donation-cta.hbs
├── default.hbs
├── index.hbs
├── post.hbs
├── page.hbs
└── package.json
```

### Making Changes

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow existing code patterns
   - Test thoroughly on mobile and desktop
   - Ensure accessibility compliance

3. **Test Changes**
   ```bash
   # Build theme
   npm run build
   
   # Test in Ghost admin
   # Upload and activate the built theme
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

### Commit Message Format

Use conventional commits:
- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

## 🧪 Testing

### Manual Testing Checklist

- [ ] Theme activates without errors
- [ ] Homepage loads correctly
- [ ] Post pages display properly
- [ ] Mobile responsive design works
- [ ] Navigation functions correctly
- [ ] Search works (if enabled)
- [ ] Social sharing works
- [ ] Donation CTAs function
- [ ] Animations are smooth
- [ ] Dark mode preferences respected
- [ ] High contrast mode works
- [ ] Print styles applied

### Browser Testing

Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Testing

- Use screen reader (NVDA, VoiceOver, etc.)
- Test keyboard navigation
- Verify color contrast ratios
- Check ARIA labels and roles

## 📋 Pull Request Process

1. **Before Submitting**
   - Test your changes thoroughly
   - Update documentation if needed
   - Add yourself to contributors if desired

2. **Submit PR**
   - Use a descriptive title
   - Explain what changes you made
   - Include screenshots for visual changes
   - Reference any related issues

3. **PR Review**
   - Address reviewer feedback
   - Make requested changes
   - Ensure CI passes (when available)

## 🐛 Bug Reports

### Before Reporting
- Search existing issues
- Test with default Ghost theme
- Try with theme customizations disabled

### Bug Report Template
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Ghost version: [e.g. 5.47.0]
- Theme version: [e.g. 1.0.0]
- Browser: [e.g. Chrome 118]
- Device: [e.g. iPhone 12, Desktop]
```

## 💡 Feature Requests

### Suggesting Features
- Check existing feature requests
- Explain the use case
- Consider if it fits Forest Edge's purpose
- Be open to alternative solutions

### Feature Request Template
```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Other solutions you've considered.

**Additional context**
Any other context or screenshots.
```

## 📚 Resources

### Ghost Documentation
- [Ghost Themes](https://ghost.org/docs/themes/)
- [Handlebars Helpers](https://ghost.org/docs/themes/helpers/)
- [Theme Development](https://ghost.org/docs/themes/structure/)

### Design Resources
- [Snook Theme Reference](https://ghost.org/themes/snook/)
- [Forest Edge Color Palette]()
- [Typography Guidelines]()

### Development Tools
- [Ghost CLI](https://ghost.org/docs/ghost-cli/)
- [GScan Theme Validator](https://gscan.ghost.org/)
- [Handlebars Documentation](https://handlebarsjs.com/)

## 🤝 Community

### Getting Help
- Create an issue for bugs or questions
- Join Ghost community forums
- Check existing documentation

### Code of Conduct
- Be respectful and inclusive
- Help others learn and grow
- Constructive feedback only
- No harassment or discrimination

## 🏆 Recognition

Contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Credited in theme documentation

---

**Thank you for contributing to Forest Edge! Your efforts help create a better theme for the sustainable living community.** 🌲