# Philopatrick's blog

A dependency-free static blog for GitHub Pages, configured for
`blog.philopatrick.site`.

## Write a post

Open `posts.js`, copy an existing post object, and edit these fields:

- `id`: a unique, URL-friendly slug
- `title` and `excerpt`
- `date`: `YYYY-MM-DD`
- `readingTime`: for example, `4 min read`
- `tags`: an array such as `["design", "notes"]`
- `pinned`: set `true` to show it in the pinned section
- `accent`: `coral`, `blue`, `green`, `gold`, or `violet`
- `body`: the post content as simple HTML

Everything is sorted automatically. Tags become filters and archive entries are
grouped by year.

## Preview locally

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish on GitHub Pages

1. Create a public GitHub repository and push these files to its `main` branch.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)`, then save.
4. In the Pages custom-domain field, enter `blog.philopatrick.site`.
5. At your DNS provider, add a `CNAME` record:
   - Host/name: `blog`
   - Target/value: `<your-github-username>.github.io`
6. After GitHub verifies the domain, enable **Enforce HTTPS**.

The included `CNAME` file preserves the custom domain across deployments.
