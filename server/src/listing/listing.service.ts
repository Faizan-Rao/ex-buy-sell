import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateListingT } from './dto/update-listing.dto';
import { Brand, ListingSchemaT } from './dto/create-listing.dto';

@Injectable()
export class ListingService {
  constructor(private readonly db: PrismaService) {}

  async findAll() {
    return this.db.listing.findMany();
  }

  async findOne(id: string) {
    return this.db.listing.findUnique({
      where: { id },
    });
  }

  async create(userId: string, body: ListingSchemaT) {
    // return this.db.listing.create({
    //   data: {
    //     brand: {
    //       connect: {
    //         id: body.brand?.id as string,
    //       },
    //       create: body.brand,
    //     },
    //     category: {
    //       createMany: {
    //         data: body.category,
    //       },
    //     },
    //     tools: {
    //       createMany: {
    //         data: body.tool,
    //       },
    //     },
    //     status: body.status,
    //     user: {
    //       connect: { id: userId },
    //     },

    //     financials: {
    //       createMany: {
    //         data: body.financial,
    //       },
    //     },
    //     statistics: {
    //      create: {
    //           ...body.statistics,
    //           adverstising_channel: {createMany: {data:body.statistics?.adverstising_channel}},
    //           sales_channel:{ createMany: {data: body.statistics?.sales_channel}},
    //           sales_countries:{ createMany:
    //             {data: body.statistics?.sales_countries}}
    //         },
    //       },
    //     },
    //     productQuestion: { createMany: { data: body.product_question}},

    //     social_account: body
    //       ,
    //     advertisement:  body.advertisement ,
    //     handover: body.handover
    //   },
    // });
    return this.db.listing.create({
      data: {
        brand: {
          create: body.brand,
        },
        category: {
          createMany: {
            data: body.category,
          },
        },
        tools: {
          createMany: {
            data: body.tools,
          },
        },
        status: body.status,
        financials: {
          createMany: {
            data: body.financials,
          },
        },
        statistics: {
          create: {
            customer_base: body.statistics.customer_base,
            conversion_rate: body.statistics.conversion_rate,
            average_order_value: body.statistics.average_order_value,
            returning_customer: body.statistics.returning_customer,
            email_subscribers: body.statistics.email_subscribers,
            refund_rate: body.statistics.refund_rate,
            adverstising_channel: {
              createMany: { data: body.statistics.adverstising_channel },
            },
            sales_channel: {
              createMany: { data: body.statistics.sales_channel },
            },
            sales_countries: {
              createMany: { data: body.statistics.sales_countries },
            },
          },
        },
        productQuestion: {
          createMany: {
            data: body.productQuestion,
          },
        },
        managementQuestion: {
          createMany: {
            data: body.managementQuestion,
          },
        },
        social_account: {
          createMany: {
            data: body.social_account.map((social) => ({ userId, ...social })),
          },
        },
        advertisement: {
          create: body.advertisement,
        },
        handover: {
          create: {
            handover_option: body.handover.handover_option,
            is_sale_support: body.handover.is_sale_support,
            total_month: body.handover.total_month,
          },
        },

        user: {
          connect: { id: userId },
        },
      },
      //   For Testing Include these
      include: {
        brand: true,
        category: true,
        tools: true,
        financials: true,
        statistics: {
          include: {
            adverstising_channel: true,
            sales_channel: true,
            sales_countries: true,
          },
        },
        productQuestion: true,
        managementQuestion: true,
        social_account: true,
        advertisement: true,
        handover: true,
      },
    });
  }

  async update(id: string, userId: string, body: UpdateListingT) {
    return this.db.listing.update({
      where: { id },
      data: {
        user: {
          connect: { id: userId },
        },
        status: body.status,
        brand: {
          connect: {
            listingId: id,
            id: body.brand?.id,
          },
          update: {
            name: body.brand?.name,
            business_location: body.brand?.business_location,
            domain: body.brand?.domain,
          },
        },
        category: body.category
          ? {
              updateMany: body.category?.map((category) => ({
                where: { id: category.id },
                data: { name: category.name },
              })),
            }
          : undefined,

        tools: {
          updateMany: body.tools?.map((tool) => ({
            where: { id: tool.id },
            data: { name: tool.name },
          })),
        },

        financials: body.financials
          ? {
              updateMany: body.financials?.map((financial) => ({
                where: { id: financial.id },
                data: {
                  annual_cost: financial.annual_cost,
                  revenue_amount: financial.revenue_amount,
                  type: financial.type,
                  name: financial.name,
                  net_profit: financial.net_profit,
                },
              })),
            }
          : undefined,
        statistics: {
          connect: {
            listingId: id,
            // id: body.brand?.id as string,
          },
          update: {
            where: { id: body.statistics?.id as string },
            data: {
              average_order_value: body.statistics?.average_order_value,
              conversion_rate: body.statistics?.conversion_rate,
              customer_base: body.statistics?.customer_base,
              email_subscribers: body.statistics?.email_subscribers,
              refund_rate: body.statistics?.refund_rate,
              returning_customer: body.statistics?.returning_customer,

              adverstising_channel: body.statistics?.adverstising_channel
                ? {
                    updateMany: body.statistics?.adverstising_channel.map(
                      (channel) => {
                        return {
                          where: { id: channel.id },
                          data: {
                            name: channel.name,
                            percentage: channel.percentage,
                          },
                        };
                      },
                    ),
                  }
                : undefined,
              sales_channel: body.statistics?.sales_channel
                ? {
                    updateMany: body.statistics?.sales_channel.map(
                      (channel) => ({
                        where: { id: channel.id },
                        data: {
                          name: channel.name,
                          percentage: channel.percentage,
                        },
                      }),
                    ),
                  }
                : undefined,
              sales_countries: body.statistics?.sales_countries
                ? {
                    updateMany: body.statistics?.sales_countries.map(
                      (channel) => ({
                        where: { id: channel.id },
                        data: {
                          name: channel.name,
                          percentage: channel.percentage,
                        },
                      }),
                    ),
                  }
                : undefined,
            },
          },
        },
        productQuestion: body.productQuestion
          ? {
              updateMany: body.productQuestion.map((question) => ({
                where: { id: question.id },
                data: {
                  answer: question.answer,
                  question: question.question,
                  answer_type: question.answer_type,
                  option: question.option,
                },
              })),
            }
          : undefined,
        managementQuestion: body.managementQuestion
          ? {
              updateMany: body.managementQuestion.map((question) => ({
                where: { id: question.id },
                data: {
                  answer: question.answer,
                  question: question.question,
                  answer_type: question.answer_type,
                  option: question.option,
                },
              })),
            }
          : undefined,
        social_account: body.social_account
          ? {
              updateMany: body.social_account.map((social) => ({
                where: { id: social.id },
                data: { followers: social.followers, url: social.url },
              })),
            }
          : undefined,
        advertisement: body.advertisement
          ? { update: body.advertisement }
          : undefined,
        handover: body.handover ? { update: body.handover } : undefined,
      },
      include: {
        brand: body.brand ? true : false,
        category: body.category ? true : false,
        tools: body.tools ? true : false,
        financials: body.financials ? true : false,
        statistics: body.statistics ? true : false,
        productQuestion: body.productQuestion ? true : false,
        managementQuestion: body.managementQuestion ? true : false,
        social_account: body.social_account ? true : false,
        advertisement: body.advertisement ? true : false,
        handover: body.handover ? true : false,
      },
    });
  }

  async delete(id: string) {
    return this.db.listing.delete({
      where: { id },
      include: {
        brand: { where: { listingId: id } },
        category: { where: { listingId: id } },
        tools: { where: { listingId: id } },
        financials: { where: { listingId: id } },
        statistics: { where: { listingId: id } },
        productQuestion: { where: { productQuestionId: id } },
        managementQuestion: { where: { managementQuestionId: id } },
        Favourite: { where: { listingId: id } },
        social_account: { where: { listingId: id } },
        advertisement: { where: { listingId: id } },
        handover: { where: { listingId: id } },
      },
    });
  }
}
