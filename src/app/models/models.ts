export interface DemoData {
    scenarios: Scenario[];
    neurons: Neuron[];
}

export interface Neuron {
    id: number;
    layer: number;
    activations: string[], // Todo: Change to proper format
    labels: Label[];
}

export interface Scenario {
    name: string;
    iconUrl: string;
    modelName: string;
    description: string;
    neuronIds: number[];
}

export interface Label {
    name: string;
    clarity: {
        score: number;
        text: string[];
    };
    responsivness: {
        score: number;
        text: string[];
    };
    purity: {
        score: number;
        plot: string;
    };
    faithfulness: {
        score: number;
        unsteered: string[];
        steered: string[];
    };
    additionalInfo?: string;
    labelOrigin: 'neuronpedia' | 'fade' | 'human';
}