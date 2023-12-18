export default (options) => {
  const { query, variables = {} } = options;
  const runtimeConfig = useRuntimeConfig();
  const key = JSON.stringify(options);
  return useFetch("https://graphql.datocms.com", {
    key,
    method: "POST",
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.datoCmsToken}`,
    },
    body: {
      query,
      variables,
    },
    transform: ({ data, errors }) => {
      if (errors) throw new errors();

      return data;
    },
  });
};


const QUERY = `
  query {
    blog {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>
<template>
  <p v-if="error">Something bad happened!</p>
  <p v-else>Data: <code>{{ data }}</code></p>
</template>