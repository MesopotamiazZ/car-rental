enum RegularFileCategoryEnum {
    NORM_CONTENT = 1,  //制度正文
    NORM_ATTACHMENT= 2 , //制度附件
    //工程相关3~10
    FEASILE_REPORT = 3,  //工程可研报告
    INIT_DESIGN= 4 , //工程初步设计概算
    START_REPORT= 5 , //工程开工报告
    IMPL_PLAN= 6 , //工程施工计划
    COMPLETION_REPORT= 7 , //工程竣工报告
    EVALUATE_REPORT= 8 , //工程结算审核报告
    FINAL_REPORT= 9 , //工程决算报告
    EXPERIMENT_REPORT= 10 , //试验报告

    EXPERIMENT_PLAN =11 ,// 客户试验
    VISIT_SERVICE = 12, // 走访服务
    OM = 13, //运维管理


}

export default RegularFileCategoryEnum;