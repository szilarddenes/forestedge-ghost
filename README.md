# Forest Edge Ghost Theme

> A bold and creative Ghost theme inspired by Snook, designed for documenting sustainable living and financial independence journeys.

![Forest Edge Theme Preview](https://via.placeholder.com/1200x600/2d5a3d/ffffff?text=Forest+Edge+Ghost+Theme)

## 🌲 About Forest Edge

Forest Edge is a modern, photography-focused Ghost theme that combines the bold aesthetics of the Snook theme with features specifically designed for sustainable living documentation, construction progress tracking, and financial independence journeys.

### ✨ Key Features

- **Bold, Creative Design** - Inspired by Snook theme's striking visual style
- **Photography-Focused** - Optimized for construction documentation and lifestyle photography
- **Snook-Style Homepage Circles** - Interactive topic exploration
- **Multiple Post Header Styles** - 6 different layouts (Wide, Narrow, Background Media, etc.)
- **Custom Donation Integration** - Built-in support for project funding
- **YouTube Integration** - Seamless video content embedding
- **Progress Tracking** - Visual construction/project progress indicators
- **Mobile-Optimized** - Responsive design for all devices
- **Smooth Animations** - GSAP and Lenis integration for premium feel
- **Multiple Card Styles** - Creative and default post card layouts
- **Forest Edge Branding** - Nature-inspired color palette and typography

## 🚀 Installation

### Method 1: Upload to Ghost Admin

1. Download the latest release from [Releases](https://github.com/szilarddenes/forestedge-ghost/releases)
2. In your Ghost Admin, go to **Design & branding**
3. Click **Change theme** → **Upload theme**
4. Upload the `forestedge-ghost.zip` file
5. Activate the theme

### Method 2: Git Clone

```bash
# Clone to your Ghost themes directory
git clone https://github.com/szilarddenes/forestedge-ghost.git
cd forestedge-ghost

# Copy to Ghost themes folder
cp -r . /var/lib/ghost/content/themes/forestedge/

# Restart Ghost
ghost restart
```

## ⚙️ Theme Configuration

After installing, configure your theme in **Ghost Admin → Design → Site-wide settings**:

### 🎨 Visual Settings

- **Accent Color** - Forest green (#2d5a3d) or custom color
- **Body Font** - Modern sans-serif, Elegant serif, or Classic sans-serif
- **Homepage Style** - Featured posts, Latest posts, or Magazine style
- **Post Header Style** - Wide, Narrow, Background Media (+ centered variants)
- **Card Style** - Creative (Snook-inspired) or Default

### 🏗️ Forest Edge Specific

- **YouTube Channel URL** - Link to your construction/journey vlogs
- **Donation URL** - Support your sustainable living project
- **Construction Progress** - Percentage completion (e.g., "75")
- **Homepage Circles** - Tags, Testimonials, or None

### 🎛️ Advanced Options

- **Show Author Bio** - Display author information on post cards
- **Enable Smooth Scroll** - GSAP/Lenis animations
- **Show Publication Cover** - Homepage cover image display

## 📱 Mobile Experience

Forest Edge is fully responsive with:

- Touch-optimized navigation
- Optimized image loading
- Mobile-specific layouts
- Gesture-friendly interactions
- Fast loading times

## 🎯 Perfect For

- **Sustainable Living Blogs** - Document your eco-friendly journey
- **Construction Documentation** - Track building progress with photos
- **Financial Independence** - Share your path to FI
- **Photography Portfolios** - Showcase your visual storytelling
- **Lifestyle Blogs** - Bold, creative content presentation
- **Project Fundraising** - Built-in donation/support features

## 🛠️ Customization

### Custom CSS

Add custom styles in **Ghost Admin → Code Injection → Site Header**:

```css
<style>
:root {
  --accent-color: #your-custom-color;
  --forest-green: #your-brand-color;
}

/* Your custom styles */
.custom-element {
  /* Your styles here */
}
</style>
```

### Post Templates

Forest Edge supports multiple post templates:

- `post.hbs` - Default post layout
- `post-{slug}.hbs` - Custom post layouts
- `page.hbs` - Static pages
- `page-{slug}.hbs` - Custom page layouts

### Featured Posts

To feature posts:

1. Edit your post in Ghost Admin
2. Click the settings gear icon
3. Toggle "Feature this post"
4. Featured posts appear in hero section and special grids

## 📊 Analytics & SEO

Forest Edge includes:

- **Structured Data** - Rich snippets for better search visibility
- **Open Graph** - Social media sharing optimization
- **Performance Optimized** - Fast loading, lazy images
- **Accessibility** - WCAG 2.1 compliant
- **Analytics Ready** - Google Analytics/Tag Manager compatible

## 🔄 Updates

To update your theme:

1. Backup your current theme and any customizations
2. Download the latest version from GitHub
3. Replace theme files (preserving any custom modifications)
4. Test on staging environment first
5. Deploy to production

## 🐛 Troubleshooting

### Common Issues

**Theme not activating:**
- Check that all required files are present
- Verify `package.json` is valid
- Ensure Ghost version compatibility (5.0+)

**Images not displaying:**
- Check image URLs and paths
- Verify image sizes in theme settings
- Test with different image formats

**Animations not working:**
- Ensure smooth scroll is enabled in theme settings
- Check browser compatibility
- Verify GSAP/Lenis scripts are loading

### Debug Mode

Enable Ghost development mode:

```bash
ghost stop
NODE_ENV=development ghost start
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Setup

```bash
# Clone repository
git clone https://github.com/szilarddenes/forestedge-ghost.git
cd forestedge-ghost

# Install development dependencies (if any)
npm install

# Link to local Ghost installation
ln -s $(pwd) /var/lib/ghost/content/themes/forestedge-dev

# Start Ghost in development mode
ghost restart --development
```

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Credits

- **Inspired by** - [Snook Ghost Theme](https://ghost.org/themes/snook/) by KUSA Projects
- **Icons** - Emoji and Unicode symbols for accessibility
- **Fonts** - Inter (Google Fonts) and Playfair Display
- **Animation Libraries** - GSAP and Lenis

## 📞 Support

For support and questions:

- **GitHub Issues** - Report bugs and feature requests
- **Email** - hello@forestedge.garden
- **Documentation** - This README and code comments

---

**Built with ❤️ for sustainable living and financial independence journeys. 🌲**

*Transform your Ghost blog into a beautiful documentation platform for your sustainable living journey with Forest Edge theme.*