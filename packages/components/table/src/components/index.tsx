import type { PaginationProps } from 'naive-ui'
import type { PropType } from 'vue'

import type { UltraTableInstance } from '../types'
import { If, isObject } from '@naive-ultra/utils'

import { reactiveOmit, reactivePick } from '@vueuse/core'
import { c, dataTableProps, NDataTable, NPagination } from 'naive-ui'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useTableMinWidth } from '../composables'

const { pagination: _p, ...extendsProps } = dataTableProps

export const ultraTableProps = {
  ...extendsProps,
  is: {
    type: Object as PropType<UltraTableInstance>,
    required: true as const,
  },
  pagination: {
    type: [Boolean, Object] as PropType<boolean | Omit<PaginationProps, 'page' | 'pageSize' | 'pageCount'>>,
    default: true as const,
  },
}

export const NuTable = defineComponent({
  name: 'NuTable',
  props: ultraTableProps,
  setup(_props, { slots }) {
    style.mount()

    const customs = ['is', 'pagination'] as const
    const props = reactivePick(_props, ...customs)
    const tableProps = reactiveOmit(_props, ...customs)

    const {
      _tableInstRef,
      data,
      loading,
    } = toRefs(props.is)

    const instance = computed(() => reactive(props.is))
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

    return () => (
      <div
        class="nu-table"
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
        <If cond={showPagination.value} class="nu-table__pagination" tag="div">
          <NPagination
            v-models={[
              [instance.value.pagination.page, 'page'],
              [instance.value.pagination.pageSize, 'pageSize'],
            ]}
            {...pagination.value}
          />
        </If>
      </div>
    )
  },
})

const style = c('.nu-table', [
  c('.n-data-table-table', {
    minWidth: 'var(--n-table-min-width) !important',
  }),

  c('.nu-table__pagination', {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '18px',
    userSelect: 'none',
  }),
])
