import type { PaginationProps } from 'naive-ui'
import { NDataTable, NPagination, c, dataTableProps } from 'naive-ui'

import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'

import { reactiveOmit, reactivePick } from '@vueuse/core'
import { Condition, isObject } from '@naive-ui-pro/utils'
import type { ProTableInstance } from '../types'
import { useTableMinWidth } from '../composables'

const { pagination: _p, ...extendsProps } = dataTableProps

export const proTableProps = {
  ...extendsProps,
  instance: {
    type: Object as PropType<ProTableInstance>,
    required: true as const,
  },
  pagination: {
    type: [Boolean, Object] as PropType<boolean | Omit<PaginationProps, 'page' | 'pageSize' | 'pageCount'>>,
    default: true as const,
  },
}

export const NProTable = defineComponent({
  name: 'ProTable',
  props: proTableProps,
  setup(_props, { slots }) {
    style.mount()

    const customs = ['instance', 'pagination'] as const
    const props = reactivePick(_props, ...customs)
    const tableProps = reactiveOmit(_props, ...customs)

    const instance = computed(() => props.instance)
    const columns = computed(() => tableProps.columns ?? [])
    const data = computed(() => instance.value.data)

    const showPagination = computed(() => props.pagination !== false)

    const pagination = computed(() => {
      return {
        showQuickJumper: instance.value.pagination.pageCount > 1,
        pageCount: instance.value.pagination.pageCount,
        showSizePicker: true,
        pageSizes: [10, 20, 30, 40],
        ...(isObject(props.pagination) ? props.pagination : {}),
      } as PaginationProps
    })

    const minWidth = useTableMinWidth(columns)

    return () => <div
      class="n-pro-table"
      style={{ '--n-table-min-width': `${minWidth.value}px` }}
    >
      <NDataTable
        {...tableProps}
        data={data.value}
        columns={columns.value}
        loading={instance.value.loading}
      >
        {slots}
      </NDataTable>
      <Condition if={showPagination.value} class="n-pro-table__pagination" tag="div">
        <NPagination
          v-models={[
            [instance.value.pagination.page, 'page'],
            [instance.value.pagination.pageSize, 'pageSize'],
          ]}
          {...pagination.value}
        />
      </Condition>
    </div>
  },
})

const style = c([
  c('.n-data-table-table', {
    minWidth: 'var(--n-table-min-width) !important',
  }),
  c('.n-pro-table__pagination', {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '18px',
    userSelect: 'none',
  }),
])
