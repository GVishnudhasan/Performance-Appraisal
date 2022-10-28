import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mt5",
  templateUrl: "./mt5.component.html",
  styleUrls: ["./mt5.component.scss"],
})
export class Mt5Component implements OnInit {
  constructor() {}

  categoryList = {
    g1: {
      qty_of_class: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 20,
      },
      qb: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      rf_book: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },
    g2: {
      qty_of_videomaterial: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      prep_of_videomaterial: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total:0,
    },
    g3: {
      gate_or_refbook: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      usage_of_bt: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 5,
      },
      on_time_sub_qp: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 5,
      },
      grand_total:0,
    },
    g4: {
      prep_of_ppt: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      using_various_ptm: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total:0,
    },
    g5: {
      mid_sem_fb: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 5,
      },
      end_sem_fb: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 5,
      },
      arm_fb: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total:0,
    },
    g6: {
      on_time_sub: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      comp_of_cf: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total:0,
    },
    g7: {
      pass: 0,
      score: 0,
    },
  
    g8: {
      pass: 0,
      score: 0,
    },
  
    g9: {
      lab_manual_prep: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      std_of_lab: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 20,
      },
      content_beyond_syll: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      on_time_comp: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total:0,
    },
    g10: {
      a: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      b: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 20,
      },
      c: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      d: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total:0,
    },
  };
  categoryList1 = {
    g1: {
      training_tier_1_ind: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      training_tier_2_tier_3_ind: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      training_outcome:{
        marks:0,
        sum:0,
        overall_total: 0,


      },
      grand_total: 0,
    },
    g2: {
      guest_lecture: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      grand_total: 0,
    },
    g3: {
      mou_signed: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      impact_of_ic: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      grand_total: 0,
    },
    g4: {
      vac_faculty_team: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      vac_faculty_industry: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      vac_industry_resources: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      grand_total: 0,
    },
    g5: {
      impact_of_mentoring: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      a: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      b: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      grand_total: 0,
    },
  };

  categoryList2 = {
    g1: {
      dep_lev_res: {
        op1: 0,
        overall_total: 30,
      },
      ra_eff_Hod: {
        op1: 0,
        overall_total: 20,
      },
      ins_lev_res: {
        op1: 0,
        sum: 0,
        overall_total: 30,
      },
      rat_eff_prin: {
        op1: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g2: {
      par_ext_act: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 30,
      },
      grand_total: 0,
    },
    g3: {
      aw_rec: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 30,
      },
      grand_total: 0,
    },

  };

  ngOnInit(): void {}
  async setmap() {
    await this.opt_data();
    console.log(this.categoryList);
    console.log(this.categoryList2);
  }

  async opt_data() {
    this.categoryList.g1.qty_of_class.sum =
      (this.categoryList.g1.qty_of_class.os1 +
        this.categoryList.g1.qty_of_class.os2 +
        this.categoryList.g1.qty_of_class.es1 +
        this.categoryList.g1.qty_of_class.es2) /
      4;

    this.categoryList.g1.qb.sum =
      (this.categoryList.g1.qb.os1 +
        this.categoryList.g1.qb.os2 +
        this.categoryList.g1.qb.es1 +
        this.categoryList.g1.qb.es2) /
      4;

    this.categoryList.g1.rf_book.sum =
      (this.categoryList.g1.rf_book.os1 +
        this.categoryList.g1.rf_book.os2 +
        this.categoryList.g1.rf_book.es1 +
        this.categoryList.g1.rf_book.es2) /
      4;

    this.categoryList.g1.grand_total =
      this.categoryList.g1.qty_of_class.sum +
      this.categoryList.g1.qb.sum +
      this.categoryList.g1.rf_book.sum;

    this.categoryList2.g1.grand_total =
      this.categoryList2.g1.dep_lev_res.op1 +
      this.categoryList2.g1.ra_eff_Hod.op1 +
      this.categoryList2.g1.ins_lev_res.op1 +
      this.categoryList2.g1.rat_eff_prin.op1;
    
      this.categoryList.g2.qty_of_videomaterial.sum =
      (this.categoryList.g2.qty_of_videomaterial.os1 +
        this.categoryList.g2.qty_of_videomaterial.os2 +
        this.categoryList.g2.qty_of_videomaterial.es1 +
        this.categoryList.g2.qty_of_videomaterial.es2) /
      4;

    this.categoryList.g2.prep_of_videomaterial.sum =
      (this.categoryList.g2.prep_of_videomaterial.os1 +
        this.categoryList.g2.prep_of_videomaterial.os2 +
        this.categoryList.g2.prep_of_videomaterial.es1 +
        this.categoryList.g2.prep_of_videomaterial.es2) /
      4;

    this.categoryList.g2.grand_total =
      this.categoryList.g2.qty_of_videomaterial.sum +
      this.categoryList.g2.prep_of_videomaterial.sum;

    //cl - g3
    this.categoryList.g3.gate_or_refbook.sum =
      (this.categoryList.g3.gate_or_refbook.os1 +
        this.categoryList.g3.gate_or_refbook.os2 +
        this.categoryList.g3.gate_or_refbook.es1 +
        this.categoryList.g3.gate_or_refbook.es2) /
      4;

    this.categoryList.g3.usage_of_bt.sum =
      (this.categoryList.g3.usage_of_bt.os1 +
        this.categoryList.g3.usage_of_bt.os2 +
        this.categoryList.g3.usage_of_bt.es1 +
        this.categoryList.g3.usage_of_bt.es2) /
      4;

    this.categoryList.g3.on_time_sub_qp.sum =
      (this.categoryList.g3.on_time_sub_qp.os1 +
        this.categoryList.g3.on_time_sub_qp.os2 +
        this.categoryList.g3.on_time_sub_qp.es1 +
        this.categoryList.g3.on_time_sub_qp.es2) /
      4;

    this.categoryList.g3.grand_total =
      this.categoryList.g3.usage_of_bt.sum +
      this.categoryList.g3.gate_or_refbook.sum +
      this.categoryList.g3.on_time_sub_qp.sum;

    //cl - g4

    this.categoryList.g4.prep_of_ppt.sum =
      (this.categoryList.g4.prep_of_ppt.os1 +
        this.categoryList.g4.prep_of_ppt.os2 +
        this.categoryList.g4.prep_of_ppt.es1 +
        this.categoryList.g4.prep_of_ppt.es2) /
      4;

    this.categoryList.g6.comp_of_cf.sum =
      (this.categoryList.g6.comp_of_cf.os1 +
        this.categoryList.g6.comp_of_cf.os2 +
        this.categoryList.g6.comp_of_cf.es1 +
        this.categoryList.g6.comp_of_cf.es2) /
      4;

    this.categoryList.g4.grand_total =
      this.categoryList.g4.prep_of_ppt.sum +
      this.categoryList.g6.comp_of_cf.sum;

    //cl - g5
    this.categoryList.g5.mid_sem_fb.sum =
      (this.categoryList.g5.mid_sem_fb.os1 +
        this.categoryList.g5.mid_sem_fb.os2 +
        this.categoryList.g5.mid_sem_fb.es1 +
        this.categoryList.g5.mid_sem_fb.es2) /
      4;

    this.categoryList.g5.end_sem_fb.sum =
      (this.categoryList.g5.end_sem_fb.os1 +
        this.categoryList.g5.end_sem_fb.os2 +
        this.categoryList.g5.end_sem_fb.es1 +
        this.categoryList.g5.end_sem_fb.es2) /
      4;

    this.categoryList.g5.arm_fb.sum =
      (this.categoryList.g5.arm_fb.os1 +
        this.categoryList.g5.arm_fb.os2 +
        this.categoryList.g5.arm_fb.es1 +
        this.categoryList.g5.arm_fb.es2) /
      4;

    this.categoryList.g5.grand_total =
      this.categoryList.g5.mid_sem_fb.sum +
      this.categoryList.g5.end_sem_fb.sum +
      this.categoryList.g5.arm_fb.sum;

    //cl - g6

    this.categoryList.g6.on_time_sub.sum =
      (this.categoryList.g6.on_time_sub.os1 +
        this.categoryList.g6.on_time_sub.os2 +
        this.categoryList.g6.on_time_sub.es1 +
        this.categoryList.g6.on_time_sub.es2) /
      4;

    this.categoryList.g6.comp_of_cf.sum =
      (this.categoryList.g6.comp_of_cf.os1 +
        this.categoryList.g6.comp_of_cf.os2 +
        this.categoryList.g6.comp_of_cf.es1 +
        this.categoryList.g6.comp_of_cf.es2) /
      4;

    this.categoryList.g6.grand_total =
      this.categoryList.g6.comp_of_cf.sum +
      this.categoryList.g6.on_time_sub.sum;

    //cl - g9
    this.categoryList.g9.lab_manual_prep.sum =
      (this.categoryList.g9.lab_manual_prep.os1 +
        this.categoryList.g9.lab_manual_prep.os2 +
        this.categoryList.g9.lab_manual_prep.es1 +
        this.categoryList.g9.lab_manual_prep.es2) /
      4;

    this.categoryList.g9.std_of_lab.sum =
      (this.categoryList.g9.std_of_lab.os1 +
        this.categoryList.g9.std_of_lab.os2 +
        this.categoryList.g9.std_of_lab.es1 +
        this.categoryList.g9.std_of_lab.es2) /
      4;

    this.categoryList.g9.content_beyond_syll.sum =
      (this.categoryList.g9.content_beyond_syll.os1 +
        this.categoryList.g9.content_beyond_syll.os2 +
        this.categoryList.g9.content_beyond_syll.es1 +
        this.categoryList.g9.content_beyond_syll.es2) /
      4;

    this.categoryList.g9.on_time_comp.sum =
      (this.categoryList.g9.on_time_comp.os1 +
        this.categoryList.g9.on_time_comp.os2 +
        this.categoryList.g9.on_time_comp.es1 +
        this.categoryList.g9.on_time_comp.es2) /
      4;

    this.categoryList.g9.grand_total =
      this.categoryList.g9.lab_manual_prep.sum +
      this.categoryList.g9.content_beyond_syll.sum +
      this.categoryList.g9.std_of_lab.sum +
      this.categoryList.g9.on_time_comp.sum;

    //cl - g10
    this.categoryList.g10.a.sum =
      (this.categoryList.g10.a.os1 +
        this.categoryList.g10.a.os2 +
        this.categoryList.g10.a.es1 +
        this.categoryList.g10.a.es2) /
      4;

    this.categoryList.g10.b.sum =
      (this.categoryList.g10.b.os1 +
        this.categoryList.g10.b.os2 +
        this.categoryList.g10.b.es1 +
        this.categoryList.g10.b.es2) /
      4;

    this.categoryList.g10.c.sum =
      (this.categoryList.g10.c.os1 +
        this.categoryList.g10.c.os2 +
        this.categoryList.g10.c.es1 +
        this.categoryList.g10.c.es2) /
      4;

    this.categoryList.g10.d.sum =
      (this.categoryList.g10.d.os1 +
        this.categoryList.g10.d.os2 +
        this.categoryList.g10.d.es1 +
        this.categoryList.g10.d.es2) /
      4;

    this.categoryList.g10.grand_total =
      this.categoryList.g10.a.sum +
      this.categoryList.g10.c.sum +
      this.categoryList.g10.b.sum +
      this.categoryList.g10.d.sum;
      this.categoryList1.g1.grand_total =
      this.categoryList1.g1.training_tier_1_ind.marks +
      this.categoryList1.g1.training_tier_2_tier_3_ind.marks +
      this.categoryList1.g1.training_outcome.marks;

    //cl1 - g2

    this.categoryList1.g2.grand_total =
      this.categoryList1.g2.guest_lecture.marks;

    //cl1 - g3

    this.categoryList1.g3.grand_total =
      this.categoryList1.g3.mou_signed.marks +
      this.categoryList1.g3.impact_of_ic.marks;

    //cl1 - g4

    this.categoryList1.g4.grand_total =
      this.categoryList1.g4.vac_faculty_industry.marks +
      this.categoryList1.g4.vac_faculty_team.marks +
      this.categoryList1.g4.vac_industry_resources.marks;

    //cl1 - g5

    this.categoryList1.g5.grand_total =
      this.categoryList1.g5.impact_of_mentoring.marks +
      this.categoryList1.g5.a.marks +
      this.categoryList1.g5.b.marks;
  }
}


  
    
