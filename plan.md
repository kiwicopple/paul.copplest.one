# Upgrade Plan for paul.copplest.one

## Current State Assessment

This is a VuePress-based personal website/blog that is **moderately out of date**.

| Component | Current Version | Latest Version | Priority |
|-----------|----------------|----------------|----------|
| VuePress | 1.9.9 | 2.x | High |
| Mermaid | 8.14.0 | 10.x | Medium |
| Node.js/Babel | 7.18-7.21 | 7.24+ | Low |
| ipfs-deploy | 7.14.0 | 7.x (check latest) | Low |

---

## Phase 1: VuePress 1 → VuePress 2 Migration (High Priority)

VuePress 2 is a complete rewrite with significant changes. This is the most impactful upgrade.

### Why Upgrade?
- VuePress 1 is in maintenance mode (no new features)
- VuePress 2 uses Vue 3 + Vite (faster builds, better DX)
- Improved TypeScript support
- Better plugin architecture

### Migration Steps

#### 1.1 Update Node.js Requirements
- Ensure Node.js >= 18.19.0 (VuePress 2 requirement)
- Update any CI/CD pipelines accordingly

#### 1.2 Update package.json
```json
{
  "devDependencies": {
    "vuepress": "^2.0.0-rc.15",
    "@vuepress/bundler-vite": "^2.0.0-rc.15",
    "@vuepress/theme-default": "^2.0.0-rc.43"
  }
}
```

#### 1.3 Migrate Configuration
- Move `docs/.vuepress/config.js` → `docs/.vuepress/config.ts` (optional but recommended)
- Update config structure:
  - `themeConfig` → `theme: defaultTheme({ ... })`
  - Plugin format changes
  - Remove deprecated options

#### 1.4 Migrate Custom Components
Files to update:
- `docs/.vuepress/components/Mermaid.vue` → Update for Vue 3 Composition API
- `docs/.vuepress/components/SectionContents.vue` → Update for Vue 3
- `docs/.vuepress/components/PageDetails.vue` → Update for Vue 3

Key changes:
- Replace `this.$...` with composition API equivalents
- Update lifecycle hooks (e.g., `mounted` → `onMounted`)
- Update `@/` path aliases if used

#### 1.5 Update Plugin References
- `@vuepress/plugin-google-analytics` → `@vuepress/plugin-google-analytics@2.x`
- Built-in search → Consider `@vuepress/plugin-search` or `vuepress-plugin-search-pro`

#### 1.6 Style Migration
- Stylus files should still work but consider migrating to CSS/SCSS
- Update any theme variable overrides for VuePress 2 naming

---

## Phase 2: Mermaid Upgrade (Medium Priority)

### Why Upgrade?
- Mermaid 10.x has significant new features (mindmaps, timeline diagrams, etc.)
- Security patches
- Better rendering performance

### Migration Steps

#### 2.1 Update Dependency
```json
{
  "dependencies": {
    "mermaid": "^10.9.0"
  }
}
```

#### 2.2 Update Mermaid Component
The initialization API changed in v10:
```javascript
// Old (v8)
mermaid.initialize({ startOnLoad: false })

// New (v10)
import mermaid from 'mermaid'
mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' })
```

#### 2.3 Test Existing Diagrams
- Review all markdown files using mermaid for compatibility
- Some diagram syntax may have changed

---

## Phase 3: Dependency Updates (Low Priority)

### 3.1 Update Babel (if needed post-VuePress 2)
VuePress 2 uses Vite by default, which has its own build system. Babel config may be simplified or removed.

### 3.2 Review ipfs-deploy
- Check if IPFS deployment is still needed/desired
- If yes, verify compatibility with latest IPFS protocols

### 3.3 Run Security Audit
```bash
npm audit
npm audit fix
```

---

## Alternative: Consider VitePress

If a more significant modernization is acceptable, consider migrating to **VitePress** (the successor to VuePress, built by the same team):

### Pros
- Even faster builds (pure Vite, no Webpack)
- Simpler configuration
- Better default theme
- First-class TypeScript support
- Active development

### Cons
- More significant migration effort
- Different configuration syntax
- May require more content restructuring

---

## Testing Checklist

After each phase, verify:

- [ ] `npm run dev` starts without errors
- [ ] All pages render correctly
- [ ] Navigation works (sidebar, navbar)
- [ ] Mermaid diagrams render
- [ ] Blog posts display correctly
- [ ] Knowledge base sections work
- [ ] Google Analytics tracking (if still desired)
- [ ] Search functionality works
- [ ] Mobile responsiveness
- [ ] `npm run build` completes successfully
- [ ] IPFS deployment (if still used)

---

## Recommended Order of Operations

1. **Backup**: Create a new branch for the upgrade
2. **Phase 1**: VuePress 2 migration (most impactful)
3. **Test thoroughly**
4. **Phase 2**: Mermaid upgrade
5. **Test thoroughly**
6. **Phase 3**: Cleanup and minor updates
7. **Final testing and deployment**

---

## Resources

- [VuePress 1 to 2 Migration Guide](https://v2.vuepress.vuejs.org/guide/migration.html)
- [VuePress 2 Documentation](https://v2.vuepress.vuejs.org/)
- [Mermaid v10 Breaking Changes](https://mermaid.js.org/intro/getting-started.html)
- [VitePress Documentation](https://vitepress.dev/) (if considering alternative)
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
