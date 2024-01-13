import type { PaginationProps } from 'naive-ui'
import { NDataTable, NPagination, c, dataTableProps } from 'naive-ui'

import type { PropType } from 'vue'
import { computed, defineComponent, reactive, toRefs } from 'vue'

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

export const NpTable = defineComponent({
  name: 'ProTable',
  props: proTableProps,
  setup(_props, { slots }) {
    style.mount()

    const customs = ['instance', 'pagination'] as const
    const props = reactivePick(_props, ...customs)
    const tableProps = reactiveOmit(_props, ...customs)

    const {
      _tableInstRef,
      data, loading,
    } = toRefs(props.instance)

    const instance = computed(() => reactive(props.instance))
    const columns = computed(() => tableProps.columns ?? [])

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
      class="np-table"
      style={{ '--n-table-min-width': `${minWidth.value}px` }}
    >
      <NDataTable
        ref={_tableInstRef}
        {...tableProps}
        data={data.value}
        columns={columns.value}
        loading={loading.value}
      >
        {slots}
      </NDataTable>
      <Condition if={showPagination.value} class="np-table__pagination" tag="div">
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
  c('.np-table__pagination', {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '18px',
    userSelect: 'none',
  }),
])
