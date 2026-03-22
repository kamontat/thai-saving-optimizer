import type { Product } from "../models/types.ts";
import { cimbBasicBanking } from "./cimb/cimb-basic-banking.ts";
import { cimbChillD } from "./cimb/cimb-chill-d.ts";
import {
	cimbFixedD3m,
	cimbFixedD6m,
	cimbFixedD9m,
	cimbFixedD12m,
} from "./cimb/cimb-fixed-d.ts";
import {
	cimbFixed3m,
	cimbFixed6m,
	cimbFixed12m,
	cimbFixed24m,
	cimbFixed36m,
} from "./cimb/cimb-fixed-deposits.ts";
import {
	cimbPhemkhaSabaiJai24m,
	cimbPhemkhaSabaiJai36m,
} from "./cimb/cimb-phemkha-sabai-jai.ts";
import { cimbSeniorFixed12m } from "./cimb/cimb-senior-fixed.ts";
import { cimbSpeedDPlus } from "./cimb/cimb-speed-d-plus.ts";
import { cimbSpeedSavings } from "./cimb/cimb-speed-savings.ts";
import {
	kbankFixed3m,
	kbankFixed6m,
	kbankFixed12m,
	kbankFixed24m,
	kbankFixed36m,
} from "./kbank/kbank-fixed-deposits.ts";
import { kbankFlexFamily } from "./kbank/kbank-flex-family.ts";
import {
	kbankEPocket,
	kbankESavings,
	kbankSavings,
} from "./kbank/kbank-savings.ts";
import { kbankSuperSenior } from "./kbank/kbank-super-senior.ts";
import { kbankTaweesup } from "./kbank/kbank-taweesup.ts";
import { dimeSave } from "./kkp/dime-save.ts";
import { finSave } from "./kkp/fin-save.ts";
import { kkpCurrentPlus } from "./kkp/kkp-current-plus.ts";
import {
	kkpEFixed3m,
	kkpEFixed6m,
	kkpEFixed12m,
	kkpEFixedSpecial10m,
} from "./kkp/kkp-e-fixed.ts";
import {
	kkpFixed3m,
	kkpFixed6m,
	kkpFixed9m,
	kkpFixed12m,
	kkpFixed24m,
	kkpFixed36m,
} from "./kkp/kkp-fixed-deposits.ts";
import { kkpFixedSpecial10m } from "./kkp/kkp-fixed-special.ts";
import { kkpFree55Up12m, kkpFree55Up24m } from "./kkp/kkp-free-55-up.ts";
import { kkpLifecareSaving } from "./kkp/kkp-lifecare-saving.ts";
import { kkpSavingsPlus } from "./kkp/kkp-savings-plus.ts";
import { kkpSavvy } from "./kkp/kkp-savvy.ts";
import { kkpSmartBonus } from "./kkp/kkp-smart-bonus.ts";
import { kkpSmartGrowth } from "./kkp/kkp-smart-growth.ts";
import { kkpSmartSavings } from "./kkp/kkp-smart-savings.ts";
import { kkpSmartSettlement } from "./kkp/kkp-smart-settlement.ts";
import { kkpStartSaving } from "./kkp/kkp-start-saving.ts";
import { kkpTaxFree24m, kkpTaxFree36m } from "./kkp/kkp-tax-free.ts";
import {
	scbFixed3m,
	scbFixed6m,
	scbFixed12m,
	scbFixed24m,
	scbFixed36m,
} from "./scb/scb-fixed-deposits.ts";
import { scbBonus24m, scbBonus36m } from "./scb/scb-long-term.ts";
import { scbEasySavings, scbJadTem, scbSavings } from "./scb/scb-savings.ts";
import {
	tcbFixed6m,
	tcbFixed8m,
	tcbFixed9m,
	tcbFixed12m,
	tcbFixed18m,
	tcbFixed24m,
	tcbFixed36m,
} from "./tcb/tcb-fixed-deposits.ts";
import { tcbHappySenior12m } from "./tcb/tcb-fixed-happy-senior.ts";
import { tcbFixedTunjai12m } from "./tcb/tcb-fixed-tunjai.ts";
import {
	tcbBasicBanking,
	tcbBizDefined,
	tcbBizPlus,
	tcbPlusAccountOne,
	tcbPlusHi,
	tcbPlusSpecial,
	tcbSavings,
	tcbTemKrapuk,
} from "./tcb/tcb-savings.ts";
import { tcbTaxFree24m, tcbTaxFree36m } from "./tcb/tcb-tax-free.ts";
import {
	uobFixed3m,
	uobFixed6m,
	uobFixed12m,
	uobFixed24m,
	uobFixed36m,
} from "./uob/uob-fixed-deposits.ts";
import { uobOneAccount } from "./uob/uob-one-account.ts";
import { uobStash } from "./uob/uob-stash.ts";
import { uobTmrwSavings } from "./uob/uob-tmrw-savings.ts";
import { ttbDreamSavings } from "./ttb/ttb-dream-savings.ts";
import { ttbExclusive9m } from "./ttb/ttb-exclusive.ts";
import {
	ttbFixed3m,
	ttbFixed6m,
	ttbFixed12m,
	ttbFixed24m,
	ttbFixed36m,
} from "./ttb/ttb-fixed-deposits.ts";
import { ttbMeSave } from "./ttb/ttb-me-save.ts";
import { ttbNoFixed } from "./ttb/ttb-no-fixed.ts";
import {
	ttbQuickInterest3m,
	ttbQuickInterest12m,
} from "./ttb/ttb-quick-interest.ts";
import {
	ttbAllFree,
	ttbBasic,
	ttbPuentarn,
} from "./ttb/ttb-savings.ts";
import { ttbSavingsCare } from "./ttb/ttb-savings-care.ts";
import {
	ttbFixedPlus4m,
	ttbFixedPlus7m,
	ttbFixedPlus12m,
	ttbFixedPlus18m,
} from "./ttb/ttb-term-deposit-plus.ts";
import { ttbTheExclusiveSavings } from "./ttb/ttb-the-exclusive-savings.ts";
import {
	ttbUpAndUp12m,
	ttbUpAndUp24m,
} from "./ttb/ttb-up-and-up.ts";

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
	// UOB Savings accounts
	uobTmrwSavings,
	uobStash,
	uobOneAccount,
	// UOB Fixed deposits
	uobFixed3m,
	uobFixed6m,
	uobFixed12m,
	uobFixed24m,
	uobFixed36m,
	// CIMB Thai Savings accounts
	cimbChillD,
	cimbSpeedDPlus,
	cimbSpeedSavings,
	cimbBasicBanking,
	// CIMB Thai Fixed deposits (Fixed D, digital)
	cimbFixedD3m,
	cimbFixedD6m,
	cimbFixedD9m,
	cimbFixedD12m,
	// CIMB Thai Fixed deposits (passbook)
	cimbFixed3m,
	cimbFixed6m,
	cimbFixed12m,
	cimbFixed24m,
	cimbFixed36m,
	// CIMB Thai Fixed deposits (special)
	cimbSeniorFixed12m,
	// CIMB Thai Long-term deposits (tax-free monthly savings)
	cimbPhemkhaSabaiJai24m,
	cimbPhemkhaSabaiJai36m,
	// Thai Credit Bank Savings accounts
	tcbSavings,
	tcbBasicBanking,
	tcbPlusAccountOne,
	tcbPlusHi,
	tcbPlusSpecial,
	tcbTemKrapuk,
	tcbBizPlus,
	tcbBizDefined,
	// Thai Credit Bank Fixed deposits
	tcbFixed6m,
	tcbFixed8m,
	tcbFixed9m,
	tcbFixed12m,
	tcbFixed18m,
	tcbFixed24m,
	tcbFixed36m,
	// Thai Credit Bank Fixed deposits (special)
	tcbFixedTunjai12m,
	tcbHappySenior12m,
	// Thai Credit Bank Long-term deposits (tax-free)
	tcbTaxFree24m,
	tcbTaxFree36m,
	// TMBThanachart Bank (ttb) Savings accounts
	ttbNoFixed,
	ttbMeSave,
	ttbDreamSavings,
	ttbSavingsCare,
	ttbTheExclusiveSavings,
	ttbAllFree,
	ttbBasic,
	ttbPuentarn,
	// TMBThanachart Bank (ttb) Fixed deposits
	ttbFixed3m,
	ttbFixed6m,
	ttbFixed12m,
	ttbFixed24m,
	ttbFixed36m,
	// TMBThanachart Bank (ttb) Fixed deposits (Up & Up, step-up)
	ttbUpAndUp12m,
	ttbUpAndUp24m,
	// TMBThanachart Bank (ttb) Fixed deposits (special)
	ttbQuickInterest3m,
	ttbQuickInterest12m,
	ttbExclusive9m,
	// TMBThanachart Bank (ttb) Fixed deposits (Plus, monthly interest)
	ttbFixedPlus4m,
	ttbFixedPlus7m,
	ttbFixedPlus12m,
	ttbFixedPlus18m,
];
