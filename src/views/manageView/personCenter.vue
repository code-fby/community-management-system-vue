<template>
  <div class="p20">
    <el-form :model="tableForm" ref="tableForm" inline>
      <el-form-item prop="name">
        <el-input v-model="tableForm.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">查询</el-button>
      </el-form-item>
    </el-form>
    <table-with-page ref="datagrid" :bindForm="tableForm" :data="tableData" :rowHeader="rowHeader" :totalAmount="totalAmount" :pageSize="pageSize"></table-with-page>
  </div>
</template>

<script>
import tableWithPage from '@/components/TableWithPage/tableWithPage'
export default {
  components: {
    tableWithPage
  },
  data() {
    return {
      tableForm: {
        name: '',
        sex: '',
        age: '',
        score: '',
        aaa: '',
        bbb: '',
        ccc: '',
        ddd: '',
        eee: '',
        fff: '',
        ggg: '',
        hhh: ''
      },
      tableData: [
        {
          name: '老王',
          sex: '0',
          age: 18,
          score: 60,
          aaa: '1教大家发偶觉得佛奥大家佛哦',
          bbb: 2,
          ccc: 3,
          ddd: 4,
          eee: 5,
          fff: 6,
          ggg: 7,
          hhh: 8
        },
        {
          name: '老王',
          sex: '0',
          age: 18,
          score: 60,
          aaa: '1教大家发偶觉得佛奥大家佛哦',
          bbb: 2,
          ccc: 3,
          ddd: 4,
          eee: 5,
          fff: 6,
          ggg: 7,
          hhh: 8
        },
        {
          name: '老王',
          sex: '0',
          age: 18,
          score: 60,
          aaa: '1教大家发偶觉得佛奥大家佛哦',
          bbb: 2,
          ccc: 3,
          ddd: 4,
          eee: 5,
          fff: 6,
          ggg: 7,
          hhh: 8
        }
      ],
      rowHeader: [
        // 未做任何格式化处理的数据
        {
          prop: 'name',
          label: '姓名',
          fixed: true,
          width: '200'
        },
        // 格式化为字符串
        {
          prop: 'sex',
          label: '性别',
          width: '200',
          render: (h, params) => {
            return h('span', params.row.sex === '0' ? '男' : '女')
          }
        },
        {
          prop: 'age',
          label: '年龄',
          width: '200',
          render: (h, params) => {
            return h('span', params.row.age)
          }
        },
        // 插入组件或标签内容（例：进度条组件）
        {
          prop: 'score',
          label: '分数',
          width: '200',
          render: (h, params) => {
            return h('span', params.row.score)
            // return h('el-progress', {
            //   props: {
            //     textInside: true,
            //     strokeWidth: 18,
            //     percentage: params.row.score
            //   }
            // })
          }
        },
        {
          prop: 'aaa',
          label: '姓名',
          width: '200'
        },
        {
          prop: 'bbb',
          label: '姓名',
          width: '200'
        },
        {
          prop: 'ccc',
          label: '姓名',
          width: '200'
        },
        {
          prop: 'ddd',
          label: '姓名',
          width: '200'
        },
        {
          prop: 'eee',
          label: '姓名',
          width: '200'
        },
        {
          prop: 'fff',
          label: '姓名',
          width: '200'
        },
        {
          prop: 'ggg',
          label: '姓名',
          width: '200'
        },
        {
          prop: 'hhh',
          label: '姓名',
          width: '200'
        },
        // 添加操作按钮
        {
          // prop: '',
          label: '操作',
          fixed: 'right',
          width: '100',
          render: (h, params) => {
            return h('el-button', '删除', {
              prop: {
                type: 'primary'
              },
              on: {
                click: () => {
                  console.log('删除')
                }
              }
            })
          }
        }
      ],
      totalAmount: 3,
      pageSize: 2
    }
  },
  methods: {
    submit: function(formName) {
      console.log(formName, this.$refs[formName], this.tableForm)
      // this.$refs.datagrid.handleCurrentChange(1)
      // this.$refs.tableForm.validate(async valid => {
      //   if (!valid) {
      //     return
      //   }
      //   this.$refs.datagrid.handleCurrentChange(2)
      // })
      // if () {

      // }
      // this.tableData={}
    }
  }
}
</script>