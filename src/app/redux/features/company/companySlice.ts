import { Company } from "@/utils/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchCompanies = createAsyncThunk<Company[], string>(
  "company/fetchCompanies",
  async () => {
    const res = await fetch("/data.json");
    if (!res.ok) throw new Error("Failed to fetch companies");
    const data = await res.json();
    return data;
  }
);

interface CompanyState {
  companies: Company[];
  loading: boolean;
  error: string | null;
  selectedCompany: Company | null;
}

const initialState: CompanyState = {
  companies: [],
  loading: false,
  error: null,
  selectedCompany: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setSelectedCompany: (state, action: PayloadAction<Company>) => {
      state.selectedCompany = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCompanies.fulfilled,
        (state, action: PayloadAction<Company[]>) => {
          state.companies = action.payload;
          state.loading = false;
          if (action.payload.length > 0) {
            state.selectedCompany = action.payload[0];
          }
        }
      )
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.error = action.error.message || "Failed to load companies";
        state.loading = false;
      });
  },
});

export const { setSelectedCompany } = companySlice.actions;

export default companySlice.reducer;
