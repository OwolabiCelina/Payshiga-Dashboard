import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Business {
  id: string;
  location: string;
  business_name: string;
  accountType: string;
  business_industry: string;
  size: string;
  annual_volume: string;
}

interface BusinessState {
  businesses: Business[];
  activeBusiness: Business | null;
  modalOpen: boolean;
}

const defaultBusiness: Business = {
  id: uuidv4(), // Generate a unique ID for the initial business
  location: "Nigeria",
  business_name: "Default Business",
  accountType: "merchant-account",
  size: "1-100",
  annual_volume: "1000-10000",
  business_industry: "financial_technology",
};

const initialState: BusinessState = {
  businesses: [defaultBusiness],
  activeBusiness: defaultBusiness,
  modalOpen: false,
};

export const BusinessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    addBusiness: (state, action: PayloadAction<Omit<Business, "id">>) => {
      const newBusiness = { ...action.payload, id: uuidv4() };
      state.businesses.push(newBusiness);
      state.activeBusiness = newBusiness;
    },

    setActiveBusiness: (state, action: PayloadAction<string>) => {
      const business = state.businesses.find((b) => b.id === action.payload);
      if (business) {
        state.activeBusiness = business;
      }
    },

    toggleBusinessModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
  },
});

export default BusinessSlice.reducer;
export const { addBusiness, setActiveBusiness, toggleBusinessModal } =
  BusinessSlice.actions;
