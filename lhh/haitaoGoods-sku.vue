<!-- 海淘商品  2019/3/28-->
<template>
  <div class="app-container ">
    <div class="m-header">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-select v-model="rebateData" clearable placeholder="请选择返利网站">
                    <el-option v-for="item in rebateArr" :key="item" :label="item" :value="item">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-select v-model="shelvesData" clearable placeholder="请选择是否上架">
                    <el-option v-for="item in shelvesArr" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-cascader :options="cateOpt" v-model="cateData" :show-all-levels="false" :props="cateType" clearable placeholder="请选择类目" @change="cateChange">
            </el-cascader>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-input v-model="goodsName" placeholder="商品名称"></el-input>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="grid-content bg-purple btn-right">

            <el-button type="danger" @click="resetF">重置</el-button>
            <el-button type="primary" @click="searchF">查询</el-button>
            <el-button type="success" @click="auditBatchF">审核</el-button>
            <el-button type="success" @click="shelvesBatchF">上架</el-button>

          </div>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tabledata" class="lists" :header-cell-style="headerStyle" empty-text="暂无数据"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center">
      </el-table-column>
      <el-table-column label="序号" type="index" width="55" align="center">
      </el-table-column>
      <el-table-column prop="itemName" label="商品中文名称" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.itemName" placeholder="商品中文名称" @change="inputChange(scope.$index, scope.row)"
            clearable></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="itemName_en" label="商品官网名称" width="180">
      </el-table-column>
      <el-table-column prop="" label="图片" width="80" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.itemFile">
            <img :src="scope.row.itemFile[0]" alt="" @click="upload(scope.$index, scope.row)" style="height: 40px">
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="itemCategory" label="类目" width="200">
        <template slot-scope="scope">
          <div>
            <el-cascader :options="cateOpt" v-model="scope.row.itemCategory.split('')"  :props="cateType" clearable placeholder="请选择类目" @change="cateChange">
            </el-cascader>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="madeIn" label="来源国家" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="targetUrl" label="商品详情页URL" width="160">
      </el-table-column>
      <el-table-column prop="itemPrice" label="官网售价" width="120">

      </el-table-column>
      <el-table-column prop="priceConvert" label="换算价(RMB)" width="180">
      </el-table-column>
      <el-table-column prop="salesPrice" label="系统定价(RMB)" width="120">
      </el-table-column>
      <el-table-column width="120" label="预估重量(kg)">
        <template slot-scope="scope">
          <el-input v-model="scope.row.computeWeight" placeholder="" type="number" @keydown.native="handleInput"
            @change="inputChange(scope.$index, scope.row)" clearable></el-input>
        </template>
      </el-table-column>
      <el-table-column label="参数详情" width="120" align="center">
        <template slot-scope="scope">
          <el-button size="medium" @click="look(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="officeFreight" label="官网运费(RMB)" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.officeFreight" placeholder="" type="number" @keydown.native="handleInput"
            @change="inputChange(scope.$index, scope.row)" min="0" clearable></el-input>
        </template>
      </el-table-column>
      <el-table-column label="国际运费(RMB)" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.airRate" placeholder="" type="number" @keydown.native="handleInput"
            @change="inputChange(scope.$index, scope.row)" min="0" clearable></el-input>
        </template>
      </el-table-column>
      <el-table-column label="预估标准清关税费(RMB)" width="200">
        <template slot-scope="scope">
          <el-input v-model="scope.row.standardTariff" placeholder="" type="number" @keydown.native="handleInput"
            @change="inputChange(scope.$index, scope.row)" min="0" clearable></el-input>
        </template>
      </el-table-column>
      <el-table-column label="预估跨境清关税费(RMB)" width="200">
        <template slot-scope="scope">
          <el-input v-model="scope.row.crossBorderTariff" placeholder="" type="number" @keydown.native="handleInput"
            @change="inputChange(scope.$index, scope.row)" min="0" clearable></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="ischeck" label="是否已审核" width="150" align="center">
      </el-table-column>
      <el-table-column prop="isGrounding" label="是否已上架" width="150" align="center">

      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button size="mini" @click="audit(scope.$index, scope.row)">审核</el-button>
          <el-button size="mini" @click="preview(scope.$index, scope.row)">预览</el-button>
          <el-button size="mini" @click="shelves(scope.$index, scope.row)">上架</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper" :total="totalSize">
    </el-pagination>
    <div>
      <el-dialog title="参数详情" :visible.sync="lookVisible" width="30%" :before-close="handleClose" center>
        <!--<look></look>-->
        <sku :skuLists="skuLists" :skuGoods="skuGoods"></sku>
        <!--<div class="sku-box">
          <div v-for="(item, index) in skuLists" :key="index">
            <p class="sku-name">{{item.kind}}</p>
            <div class="sku-arr">
              <span class="sku-i" v-for="(sitem, sindex) in item.arr" :class="[item.default===sindex?"act':'', item.key]" @click="skuSelect($event, item, index, sindex)">{{sitem}}</span>
            </div>
          </div>
        </div>-->
        <span slot="footer" class="dialog-footer">
          <el-button size="small" @click="lookVisible = false">取 消</el-button>
          <el-button size="small" type="primary" @click="confirmSku">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="图片详情" :visible.sync="uploadVisible" width="30%" :before-close="handleClose">
        <upimg :itemFileArr="itemFile" :ids="idGoods" @model="fileData" @cance="canceData"></upimg>

      </el-dialog>
      <el-dialog title="预览" :visible.sync="previewVisible" width="30%" :before-close="handleClose">
        <previewgoods></previewgoods>
        <span slot="footer" class="dialog-footer">
          <el-button size="small" @click="previewVisible = false">取 消</el-button>
          <el-button size="small" type="primary" @click="previewVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>

</template>

<script>
  import {
    getGoodsList,
    groundingItem,
    groundingItems,
    updateItem,
    approveItems,
    removeItem,
    getFaliWeb,
    getTechCategoryList
  } from '@/api/haitaogoods'
  import look from './components/look.vue'
  import sku from './components/sku.vue'
  import upimg from './components/upImg.vue'
  import previewgoods from './components/previewGoods.vue'
  import page from './page.js'
  import Utils from '@/utils/common'
  export default {
    name: 'goods',
    components: {
      look,
      upimg,
      previewgoods,
      sku
    },
    mixins: [page],
    data() {
      return {
        rebateData: '',
        rebateArr: [],
        cateOpt: [],
        cateData: [],
        cateType: {
          label: 'categoryName',
          value: 'categoryName',
          children: 'children'
        },
        goodsName: '',
        shelvesData: '',
        shelvesArr: [{
          value: 'Y',
          label: '已上架'
        }, {
          value: 'N',
          label: '已下架'
        }],
        tabledata: [],
        lookVisible: false,
        uploadVisible: false,
        previewVisible: false,
        headerStyle: {
          'text-align': 'center'
        },
        itemFile: [],
        idGoods: '',
        skuLists: [],
        skuGoods: []
      }
    },
    methods: {
      // 重置
      resetF() {
        this.rebateData = ''
        this.shelvesData = ''
        this.goodsName = ''
        this.cateData = []
        this.getData()
      },
      // 获取file图片的数组
      fileData(val) {

      },
      canceData(val) {
        this.uploadVisible = val
      },
      // 查询
      searchF() {
        this.getData()
      },
      // 获得数据
      getData() {
        const data = {
          rebateNm: this.rebateData,
          itemCategory: this.cateData,
          itemName: this.goodsName,
          isGrounding: this.shelvesData,
          pagenumber: this.currentPage,
          pagesize: this.pagesize
        }
        this.tabledata = [
          {
            itemName: 'name啊实打实大',
            itemName_en: '官网闵成刚',
            itemFile: ['http://tvax2.sinaimg.cn/crop.0.0.1080.1080.180/658c5b78ly8fze093jiodj20u00u0din.jpg'],
            itemCategory: '',
            date: '国家',
            targetUrl: 'url',
            skuGoods: [
              { color: '红色', type: '64G', size: '10cm', weight: '1.2g' },
              { color: '红色', type: '64G', size: '10cm', weight: '1.8g' },
              { color: '红色', type: '64G', size: '20cm', weight: '1.2g' },
              { color: '红色', type: '64G', size: '20cm', weight: '1.8g' },
              { color: '红色', type: '64G', size: '30cm', weight: '1.2g' },
              { color: '红色', type: '64G', size: '30cm', weight: '1.8g' },
              { color: '红色', type: '128G', size: '10cm', weight: '1.2g' },
              { color: '红色', type: '128G', size: '20cm', weight: '1.2g' },
              { color: '红色', type: '128G', size: '30cm', weight: '1.2g' },
              { color: '红色', type: '128G', size: '10cm', weight: '1.8g' },
              { color: '红色', type: '128G', size: '20cm', weight: '1.8g' },
              { color: '红色', type: '128G', size: '30cm', weight: '1.8g' },
              //
              { color: '黄色', type: '64G', size: '10cm', weight: '1.2g' },
              { color: '黄色', type: '64G', size: '10cm', weight: '1.8g' },
              { color: '黄色', type: '64G', size: '20cm', weight: '1.2g' },
              { color: '黄色', type: '64G', size: '20cm', weight: '1.8g' },
              { color: '黄色', type: '64G', size: '30cm', weight: '1.2g' },
              { color: '黄色', type: '64G', size: '30cm', weight: '1.8g' },
              { color: '黄色', type: '128G', size: '10cm', weight: '1.2g' },
              { color: '黄色', type: '128G', size: '20cm', weight: '1.2g' },
              { color: '黄色', type: '128G', size: '30cm', weight: '1.2g' },
              { color: '黄色', type: '128G', size: '10cm', weight: '1.8g' },
              { color: '黄色', type: '128G', size: '20cm', weight: '1.8g' },
              { color: '黄色', type: '128G', size: '30cm', weight: '1.8g' },
              //
              { color: '白色', type: '64G', size: '10cm', weight: '1.2g' },
              { color: '白色', type: '64G', size: '10cm', weight: '1.8g' },
              { color: '白色', type: '64G', size: '20cm', weight: '1.2g' },
              { color: '白色', type: '64G', size: '20cm', weight: '1.8g' },
              { color: '白色', type: '64G', size: '30cm', weight: '1.2g' },
              { color: '白色', type: '64G', size: '30cm', weight: '1.8g' },
              { color: '白色', type: '128G', size: '10cm', weight: '1.2g' },
              { color: '白色', type: '128G', size: '20cm', weight: '1.2g' },
              // { color: '白色', type: '128G', size: '30cm', weight: '1.2g' },
              { color: '白色', type: '128G', size: '10cm', weight: '1.8g' },
              { color: '白色', type: '128G', size: '20cm', weight: '1.8g' }
              // { color: '白色', type: '128G', size: '30cm', weight: '1.8g' }
            ]
          }
        ]
        /* getGoodsList(data).then(
          response => {
            if (response.dataList !== '') {
              this.tabledata = response.dataList
            }
            this.tabledata = [
              {
                itemName: 'name啊实打实大',
                itemName_en: '官网闵成刚',
                itemFile: ['http://tvax2.sinaimg.cn/crop.0.0.1080.1080.180/658c5b78ly8fze093jiodj20u00u0din.jpg'],
                itemCategory: '',
                date: '国家',
                targetUrl: 'url',
                skuGoods: [
                  { color: '红色', type: '64G', size: '10cm', weight: '1.2g' },
                  { color: '红色', type: '64G', size: '10cm', weight: '1.8g' },
                  { color: '红色', type: '64G', size: '20cm', weight: '1.2g' },
                  { color: '红色', type: '64G', size: '20cm', weight: '1.8g' },
                  { color: '红色', type: '64G', size: '30cm', weight: '1.2g' },
                  { color: '红色', type: '64G', size: '30cm', weight: '1.8g' },
                  { color: '红色', type: '128G', size: '10cm', weight: '1.2g' },
                  { color: '红色', type: '128G', size: '20cm', weight: '1.2g' },
                  { color: '红色', type: '128G', size: '30cm', weight: '1.2g' },
                  { color: '红色', type: '128G', size: '10cm', weight: '1.8g' },
                  { color: '红色', type: '128G', size: '20cm', weight: '1.8g' },
                  { color: '红色', type: '128G', size: '30cm', weight: '1.8g' },
                  //
                  { color: '黄色', type: '64G', size: '10cm', weight: '1.2g' },
                  { color: '黄色', type: '64G', size: '10cm', weight: '1.8g' },
                  { color: '黄色', type: '64G', size: '20cm', weight: '1.2g' },
                  { color: '黄色', type: '64G', size: '20cm', weight: '1.8g' },
                  { color: '黄色', type: '64G', size: '30cm', weight: '1.2g' },
                  { color: '黄色', type: '64G', size: '30cm', weight: '1.8g' },
                  { color: '黄色', type: '128G', size: '10cm', weight: '1.2g' },
                  { color: '黄色', type: '128G', size: '20cm', weight: '1.2g' },
                  { color: '黄色', type: '128G', size: '30cm', weight: '1.2g' },
                  { color: '黄色', type: '128G', size: '10cm', weight: '1.8g' },
                  { color: '黄色', type: '128G', size: '20cm', weight: '1.8g' },
                  { color: '黄色', type: '128G', size: '30cm', weight: '1.8g' },
                  //
                  { color: '白色', type: '64G', size: '10cm', weight: '1.2g' },
                  { color: '白色', type: '64G', size: '10cm', weight: '1.8g' },
                  { color: '白色', type: '64G', size: '20cm', weight: '1.2g' },
                  { color: '白色', type: '64G', size: '20cm', weight: '1.8g' },
                  { color: '白色', type: '64G', size: '30cm', weight: '1.2g' },
                  { color: '白色', type: '64G', size: '30cm', weight: '1.8g' },
                  { color: '白色', type: '128G', size: '10cm', weight: '1.2g' },
                  { color: '白色', type: '128G', size: '20cm', weight: '1.2g' },
                  // { color: '白色', type: '128G', size: '30cm', weight: '1.2g' },
                  { color: '白色', type: '128G', size: '10cm', weight: '1.8g' },
                  { color: '白色', type: '128G', size: '20cm', weight: '1.8g' }
                  // { color: '白色', type: '128G', size: '30cm', weight: '1.8g' }
                ]
              }
            ]
          }
        ) */
      },
      // 获取返利分组
      getFaliWeb() {
        getFaliWeb().then(
          response => {
            // console.log(response)
            this.rebateArr = response.data.webList
          }
        )
      },
      // 审核
      audit(index, row) {
        console.log(row)
        if (row.officeFreight === '') {
          this.$message({
            message: '官网运费不能为空',
            type: 'warn'
          })
          return
        }
        if (row.airRate === '') {
          this.$message({
            message: '国际运费不能为空',
            type: 'warn'
          })
          return
        }
        if (row.standardTariff === '') {
          this.$message({
            message: '预估标准清关税费不能为空',
            type: 'warn'
          })
          return
        }
        if (row.crossBorderTariff === '') {
          this.$message({
            message: '预估跨境清关税费不能为空',
            type: 'warn'
          })
          return
        }
        updateItem(JSON.parse(JSON.stringify(row))).then(
          response => {
            this.$message({
              message: '审核成功',
              type: 'success'
            })
          }
        )
      },
      // 批量审核
      auditBatchF() {
        approveItems(this.multipleSelection).then(
          response => {
            console.log(response)
          }
        )
      },
      // 上架
      shelves(index, row) {
        console.log(row)
        const data = {
          id: row.idStr,
          isGrounding: 'Y'
        }
        groundingItem(data).then(
          response => {
            console.log(response)
          }
        )
      },
      // 批量上架
      shelvesBatchF() {
        const data = {
          strArr: this.idsArr.join(','),
          isGrounding: 'Y'
        }

        groundingItems(data).then(
          response => {
            console.log(response)
          }
        )
      },
      // 预览
      preview() {
        this.previewVisible = true
      },
      // 删除
      handleDelete(index, row) {
        const data = {
          id: row.idStr
        }
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          removeItem(data).then(
            response => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            }
          )
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      // 图片预览
      upload(index, row) {
        this.itemFile = row.itemFile
        this.idGoods = row.idStr
        this.uploadVisible = true
      },
      // 查看
      look(index, item) {
        // 是否有默认的
        // const showdefault = { color: '黄色', type: '64G', size: '10cm', weight: '1.8g' }
        this.skuGoods = item.skuGoods
        this.skuLists = [
          { kind: '颜色分类', arr: [], default: 0, key: 'color' },
          { kind: '规格', arr: [], default: 0, key: 'type' },
          { kind: '尺寸', arr: [], default: 0, key: 'size' },
          { kind: '重量', arr: [], default: 0, key: 'weight' }
        ]
        var skuColor = new Set()
        var skuType = new Set()
        var skuSize = new Set()
        var skuWeight = new Set()
        this.skuGoods.forEach((item) => {
          /* skuColor.add({ disable: false, val: item.color })
          skuType.add({ disable: false, val: item.type })
          skuSize.add({ disable: false, val: item.size })
          skuWeight.add({ disable: false, val: item.weight }) */
          skuColor.add(item.color)
          skuType.add(item.type)
          skuSize.add(item.size)
          skuWeight.add(item.weight)
        })
        this.skuLists[0].arr = [...skuColor]
        this.skuLists[1].arr = [...skuType]
        this.skuLists[2].arr = [...skuSize]
        this.skuLists[3].arr = [...skuWeight]
        /* this.skuLists = [
          { kind: '颜色分类', arr: ['红色', '黄色', '白色'], default: '红色' },
          { kind: '规格', arr: ['64G', '128G'], default: '64G' },
          { kind: '尺寸', arr: ['10cm', '20cm', '30cm'], default: '10cm' }
        ] */
        this.$nextTick(() => {
          // this.skuSetDisable()
        })
        this.lookVisible = true
      },
      confirmSku() {
        var goods = this.skuOperate(this.skuGoods, this.skuLists[0].arr[this.skuLists[0].default], 'color')
        goods = this.skuOperate(goods, this.skuLists[1].arr[this.skuLists[1].default], 'type')
        goods = this.skuOperate(goods, this.skuLists[2].arr[this.skuLists[2].default], 'size')
        goods = this.skuOperate(goods, this.skuLists[3].arr[this.skuLists[3].default], 'weight')
        // console.log(goods)
        if (!goods.length) {
          this.$message({
            type: 'info',
            message: '该sku无匹配的商品'
          })
        } else {
          //
          this.lookVisible = false
        }
      },
      skuSelect(e, item, index, sindex) {
        var has = Utils.hasClass(e.target, 'disable')
        // console.log(has)
        if (has) return false
        this.skuLists[index].default = sindex
        this.$nextTick(() => {
          this.skuSetDisable()
        })
      },
      skuSetDisable() {
        var allSpan = document.querySelectorAll('.sku-box span')
        for (var i = 0, length = allSpan.length; i < length; i++) {
          Utils.removeClass(allSpan[i], 'disable')
        }
        const filter = []
        const l = this.skuLists.length
        for (let i = 0; i < l; i++) {
          filter[i] = { key: this.skuLists[i].key }
          for (let j = 0; j < l; j++) {
            if (i !== j) filter[i][this.skuLists[j].key] = this.skuLists[j].arr[this.skuLists[j].default]
          }
        }
        // 筛选获取满足条件的结果列表
        // console.log(filter)
        filter.forEach((item) => {
          var goods = []
          var count = 0
          for (var key in item) {
            if (key !== 'key') {
              if (count < 1) {
                goods = this.skuOperate(this.skuGoods, item[key], key)
              } else {
                goods = this.skuOperate(goods, item[key], key)
              }
              count++
            }
          }
          var spans = document.querySelectorAll(`.sku-box .${item.key}`)
          // console.log(spans)
          var set = new Set()
          goods.forEach((good) => {
            set.add(good[item.key])
          })
          if (set.size !== spans.length) {
            var arr = [...set]
            spans.forEach((span) => {
              var has = false
              arr.forEach((val) => {
                if (val === span.innerText) has = true
              })
              if (!has) Utils.addClass(span, 'disable')
            })
          }
          // console.log(item.key)
          // console.log(goods)
        })
      },
      //
      skuOperate(arr, val, skuval) {
        var narr = []
        arr.forEach((good) => {
          if (good[skuval] === val) narr.push(good)
        })
        return narr
      },
      // 类目
      getTechCategoryList() {
        getTechCategoryList().then(
          response => {
            // console.log(response)
            this.cateOpt = this.handleData(response.dataList)
          }
        )
      },
      inputChange(index, row) {
        console.log(row)
        row.ischeck = '未审核'
      },
      // 处理级联数据
      handleData(arr) {
        arr.forEach(item => {
          if (item.children.length === 0) {
            delete item.children
          } else {
            this.handleData(item.children)
          }
        })
        return arr
      }
    },
    created() {
      this.getTechCategoryList()
      this.getData()
      this.getFaliWeb()
    }
  }

</script>

<style lang="scss" scoped>
  .m-header {
    padding-bottom: 20px;
  }

  .btn-right {
    text-align: right;
  }

  .pagination {
    margin-top: 30px;
  }
</style>
