export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62f9314694aca517fecf5d89',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k3js69pq',
                  apiId: 'ad78e8e3-dcac-4978-a056-5075fd9779f1'
                },
                {
                  buildHookId: '62f931461005160e9c2f4cf0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z6qf8njz',
                  apiId: '448f60e0-2bd1-4535-bb52-4cd8bbcbb07a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/forkisme/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z6qf8njz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
