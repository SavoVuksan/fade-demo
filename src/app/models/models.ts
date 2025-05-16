import { z } from 'zod';

export const ActivationTokenSchema = z.object({
    text: z.string(),
    activationValue: z.number().gte(0).lte(1)
});


export const ActivationSchema = z.object({
    activationText: ActivationTokenSchema.array()
})


export const LabelSchema = z.object({
    name: z.string(),
    clarity: z.object({
        score: z.number().gte(0).lte(1),
        text: z.string().array(),
    }),
    responsivness: z.object({
        score: z.number().gte(0).lte(1),
        text: z.string().array()
    }),
    purity: z.object({
        score: z.number().gte(0).lte(1),
        plot: z.string().url()
    }),
    faithfulness: z.object({
        score: z.number().gte(0).lte(1),
        unsteered: z.string().array(),
        steered: z.string().array()
    }),
    additionalInfo: z.string().optional(),
    labelOrigin: z.enum(['neuronpedia', 'fade', 'human'])
})


export const NeuronSchema = z.object({
    id: z.number().nonnegative(),
    layer: z.number().nonnegative(),
    activations: ActivationSchema.array(),
    labels: LabelSchema.array()
})


export const ScenarioSchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    iconUrl: z.string(),
    modelName: z.string(),
    description: z.string(),
    neuronIds: z.number().array()
})


export const DemoDataSchema = z.object({
    scenarios: ScenarioSchema.array(),
    neurons: NeuronSchema.array(),
    isLoadingDemoData: z.boolean().default(true),
    failedLoadingDemoData: z.string().optional(),
})

export type ActivationToken = z.infer<typeof ActivationTokenSchema>;
export type Activation = z.infer<typeof ActivationSchema>
export type Label = z.infer<typeof LabelSchema>
export type Neuron = z.infer<typeof NeuronSchema>
export type Scenario = z.infer<typeof ScenarioSchema>
export type DemoData = z.infer<typeof DemoDataSchema>
