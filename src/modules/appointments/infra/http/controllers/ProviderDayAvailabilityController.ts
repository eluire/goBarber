import { Request, Response } from "express";
import { container } from "tsyringe";

import ProviderDayAvailibilityService from "@modules/appointments/services/ListProviderDayAvailabilityService";

export default class ProviderAvailibilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const providerDayAvailibility = container.resolve(
      ProviderDayAvailibilityService
    );

    const availability = await providerDayAvailibility.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
