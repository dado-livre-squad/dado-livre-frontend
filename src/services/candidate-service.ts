import { ENV } from "@/constants/enviroment";
import { CandidateRepository } from "@/repositories/candidate-repository";
import { CandidateApi } from "./candidate-api";
import { CandidateMock } from "./candidate-mock";

export const candidateService: CandidateRepository = !ENV.mock ? new CandidateApi : new CandidateMock