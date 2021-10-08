export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615fb04f36fe544460df3437",
                  title: "Sanity Studio",
                  name: "sanity-test-blog-studio",
                  apiId: "ad7aff5c-2877-425b-9f9d-de1fd3903a51",
                },
                {
                  buildHookId: "615fb04f6ea51552148ab316",
                  title: "Blog Website",
                  name: "sanity-test-blog",
                  apiId: "288cf95f-97ab-48dd-b814-85c2acb65f3d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ninarsson/sanity-test-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-test-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
