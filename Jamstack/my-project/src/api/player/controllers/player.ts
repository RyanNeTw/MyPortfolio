/**
 * player controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::player.player', ({strapi}) => ({
        async findOne(params) {
            const {id} = params.params
            const data = await strapi.db.query('api::player.player').findOne({
                where: {slug: id},
                populate: ['image']
            })

            const entity = await this.sanitizeOutput(data, params)
            return this.transformResponse(entity)
        }
    })
);
