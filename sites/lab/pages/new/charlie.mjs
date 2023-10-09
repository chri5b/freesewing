/*
 * This page is auto-generated. Do not edit it by hand.
 */
import { Charlie } from 'designs/charlie/src/index.mjs'
// Dependencies
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { nsMerge } from 'shared/utils.mjs'
import { workbenchInlineDocs } from 'shared/mdx/docs.mjs'
// Components
import { PageWrapper, ns as pageNs } from 'shared/components/wrappers/page.mjs'
import { Workbench, ns as wbNs } from 'shared/components/workbench/new.mjs'
import { WorkbenchLayout } from 'site/components/layouts/workbench.mjs'

// Translation namespaces used on this page
const ns = nsMerge('charlie', wbNs, pageNs)

const NewCharliePage = ({ page, docs }) => (
  <PageWrapper {...page} title="Charlie" layout={WorkbenchLayout} header={null}>
    <Workbench
      {...{
        design: 'charlie',
        Design: Charlie,
        docs,
      }}
    />
  </PageWrapper>
)

export default NewCharliePage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      docs: await workbenchInlineDocs({
        Design: Charlie,
        design: 'charlie',
        locale,
      }),
      page: {
        locale,
        path: ['new', 'charlie'],
        title: 'Charlie',
      },
    },
  }
}
