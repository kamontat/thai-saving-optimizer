import type { Product } from "../models/types.ts";
import { dimeSave } from "./dime-save.ts";
import { finSave } from "./fin-save.ts";
import { kkpCurrentPlus } from "./kkp-current-plus.ts";
import {
	kkpEFixed3m,
	kkpEFixed6m,
	kkpEFixed12m,
	kkpEFixedSpecial10m,
} from "./kkp-e-fixed.ts";
import {
	kkpFixed3m,
	kkpFixed6m,
	kkpFixed9m,
	kkpFixed12m,
	kkpFixed24m,
	kkpFixed36m,
} from "./kkp-fixed-deposits.ts";
import { kkpFixedSpecial10m } from "./kkp-fixed-special.ts";
import { kkpFree55Up12m, kkpFree55Up24m } from "./kkp-free-55-up.ts";
import { kkpLifecareSaving } from "./kkp-lifecare-saving.ts";
import { kkpSavingsPlus } from "./kkp-savings-plus.ts";
import { kkpSavvy } from "./kkp-savvy.ts";
import { kkpSmartBonus } from "./kkp-smart-bonus.ts";
import { kkpSmartGrowth } from "./kkp-smart-growth.ts";
import { kkpSmartSavings } from "./kkp-smart-savings.ts";
import { kkpSmartSettlement } from "./kkp-smart-settlement.ts";
import { kkpStartSaving } from "./kkp-start-saving.ts";
import { kkpTaxFree24m, kkpTaxFree36m } from "./kkp-tax-free.ts";
import {
	scbFixed3m,
	scbFixed6m,
	scbFixed12m,
	scbFixed24m,
	scbFixed36m,
} from "./scb-fixed-deposits.ts";
import { scbBonus24m, scbBonus36m } from "./scb-long-term.ts";
import { scbSavings, scbEasySavings, scbJadTem } from "./scb-savings.ts";
import { kbankFlexFamily } from "./kbank-flex-family.ts";
import {
	kbankFixed3m,
	kbankFixed6m,
	kbankFixed12m,
	kbankFixed24m,
	kbankFixed36m,
} from "./kbank-fixed-deposits.ts";
import { kbankESavings, kbankEPocket, kbankSavings } from "./kbank-savings.ts";
import { kbankSuperSenior } from "./kbank-super-senior.ts";
import { kbankTaweesup } from "./kbank-taweesup.ts";

export const products: Product[] = [
	// Savings accounts
	kkpStartSaving,
	kkpSavvy,
	dimeSave,
	finSave,
	kkpSmartSavings,
	kkpSmartBonus,
	kkpSmartGrowth,
	kkpSmartSettlement,
	kkpSavingsPlus,
	kkpCurrentPlus,
	kkpLifecareSaving,
	// Fixed deposits (regular)
	kkpFixed3m,
	kkpFixed6m,
	kkpFixed9m,
	kkpFixed12m,
	kkpFixed24m,
	kkpFixed36m,
	// Fixed deposits (e-Fixed, paperless)
	kkpEFixed3m,
	kkpEFixed6m,
	kkpEFixed12m,
	kkpEFixedSpecial10m,
	// Fixed deposit special
	kkpFixedSpecial10m,
	// Tax-free / tax-exempt fixed deposits
	kkpFree55Up12m,
	kkpFree55Up24m,
	kkpTaxFree24m,
	kkpTaxFree36m,
	// SCB Savings accounts
	scbSavings,
	scbEasySavings,
	scbJadTem,
	// SCB Fixed deposits (E-Passbook)
	scbFixed3m,
	scbFixed6m,
	scbFixed12m,
	scbFixed24m,
	scbFixed36m,
	// SCB Long-term deposits
	scbBonus24m,
	scbBonus36m,
	// KBank Savings accounts
	kbankSavings,
	kbankESavings,
	kbankEPocket,
	// KBank Fixed deposits
	kbankFixed3m,
	kbankFixed6m,
	kbankFixed12m,
	kbankFixed24m,
	kbankFixed36m,
	// KBank Fixed deposits (special)
	kbankFlexFamily,
	kbankSuperSenior,
	kbankTaweesup,
];
