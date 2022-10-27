import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lt5",
  templateUrl: "./lt5.component.html",
  styleUrls: ["./lt5.component.scss"],
})
export class Lt5Component implements OnInit {
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
  },
  };

  ngOnInit(): void {}

  async setmap() {
    await this.opt_data();
    console.log(this.categoryList);
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
  }
}
