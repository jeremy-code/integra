import CivicAPI from "./CivicAPI";
import KnowledgeGraphAPI from "./KnowledgeGraphAPI";
import OpenSecretsAPI from "./OpenSecretsAPI";
import ProPublicaAPI from "./ProPublicaAPI";

const dataSources = () => ({
  civicAPI: new CivicAPI(),
  knowledgeGraphAPI: new KnowledgeGraphAPI(),
  openSecretsAPI: new OpenSecretsAPI(),
  proPublicaAPI: new ProPublicaAPI(),
});

export default dataSources;
