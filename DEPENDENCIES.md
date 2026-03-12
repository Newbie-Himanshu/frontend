# Dependencies & Acknowledgments

**E-Commerce Software — Storefront (Frontend)**

---

## Open-Source Projects & Their Licenses

This software builds on the work of many talented developers and open-source
communities. We are grateful for their contributions.

---

## Core Dependencies

### Commerce Engine
| Project | License | Purpose |
|---------|---------|---------|
| **MedusaJS** | MIT | Core e-commerce platform and API |
| Link | https://github.com/medusajs/medusa | - |

### Frontend Framework
| Project | License | Purpose |
|---------|---------|---------|
| **Next.js** | MIT | React framework for production |
| **React** | MIT | UI library |
| **Tailwind CSS** | MIT | CSS utility framework |
| Link | https://nextjs.org | https://react.dev | https://tailwindcss.com |

### Language & Runtime
| Project | License | Purpose |
|---------|---------|---------|
| **Node.js** | MIT | JavaScript runtime |
| **TypeScript** | Apache 2.0 | Type-safe JavaScript |
| Link | https://nodejs.org | https://www.typescriptlang.org |

---

## Additional Libraries

### UI Components & Forms
- **React Hook Form** — MIT License (efficient form handling)
- **Radix UI** — MIT License (accessible component primitives)
- **Headless UI** — MIT License (unstyled accessible components)

### API & Data Fetching
- **Axios** — MIT License (HTTP client)
- **SWR / React Query** — MIT License (data fetching and caching)

### Search & Analytics
- **Algolia** — Proprietary with free tier (search platform)
- **Google Analytics** — Google's proprietary license

### Payment Processing
- **Razorpay SDK** — Proprietary (payment gateway)
- **Stripe SDK** — Proprietary (payment processor)

### Image & Media
- **Next Image** — Included in Next.js (image optimization)
- **Sharp** — Apache 2.0 (image processing)

### Development Tools
- **ESLint** — MIT License (code linting)
- **Prettier** — MIT License (code formatting)
- **Jest** — MIT License (testing framework)

---

## How to Find All Dependencies

Run one of these commands in the project root:

```bash
# List direct dependencies
npm ls --depth=0

# View package.json
cat package.json

# View lock file (contains all resolved versions)
cat yarn.lock  # or package-lock.json
```

---

## License Compliance

### For Each Dependency You Use:
1. Check its LICENSE file in node_modules/[package-name]
2. If redistributing, include the license notice
3. For copyleft licenses (like GPL), comply with share-alike requirements
4. Respect any trademark usage restrictions

### Common License Types:
| License | Requirement | Impact |
|---------|------------|--------|
| **MIT** | Attribution | Include license, can modify and distribute |
| **Apache 2.0** | Keep notices | Patent protection included |
| **BSD** | Keep notices | Very permissive |
| **ISC** | Attribution | Similar to MIT |
| **GPL** | Share source | Viral copyleft - requires disclosure |

---

## Medusa Ecosystem

This software uses **MedusaJS**, which provides:
- Open-source commerce platform
- REST API for storefronts
- Admin APIs for management
- Extensible plugin architecture
- Database-agnostic ORM

**Medusa License:** MIT (https://github.com/medusajs/medusa)

Medusa itself depends on many other projects (Express, TypeORM, etc.),
each with their own licenses that you should review.

---

## Third-Party Services

Some integrations use third-party services with their own terms:

| Service | Purpose | License |
|---------|---------|---------|
| **Razorpay** | Payment processing | Proprietary |
| **Stripe** | Payment processor | Proprietary |
| **DigitalOcean Spaces** | File storage | Proprietary |
| **Algolia** | Search platform | Proprietary |

These services have separate Terms of Service that apply beyond this license.

---

## Contributing & Attribution

If you modify dependencies or contribute improvements:
1. Check each project's CONTRIBUTING.md
2. Submit pull requests to original projects
3. Give credit to original authors
4. Follow each project's contribution guidelines

---

## Questions About Dependencies?

1. **Which version am I using?**
   - Check package.json for version numbers

2. **Can I use this license in a commercial product?**
   - Check the specific license of each dependency
   - Most MIT/Apache/BSD licenses allow commercial use
   - GPL licenses require source disclosure

3. **Do I need to include all licenses?**
   - If redistributing code: YES, include dependency licenses
   - If using only runtime: Follow license requirements
   - When in doubt, include all licenses for all dependencies

4. **Where can I read all licenses?**
   - Each package has a LICENSE file in node_modules
   - GitHub repositories show license information
   - npm website (npmjs.com) lists licenses

---

## Summary

This software is built on the excellent work of open-source communities.
We've tried to be thorough in acknowledging our dependencies. If we've
missed anyone, please let us know at **hk8913114@gmail.com**.

**Always review and comply with the licenses of all dependencies in your
deployments.** This document is informational; each dependency's actual
license governs its use.

---

**Thank you to all open-source contributors!** 🙏

Last Updated: March 2026
