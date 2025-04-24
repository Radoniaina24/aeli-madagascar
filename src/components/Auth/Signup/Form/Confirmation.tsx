import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import { FaCheck } from "react-icons/fa";
import ButtonNextPrev from "../ButtonPrevNext/Button";

export default function Confirmation() {
  const { formData } = useFormPassContext();
  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <div className="text-green-600 text-5xl mb-4">
          <i className="fas fa-check-circle"></i>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Récapitulatif de votre candidature
        </h3>
        <p className="text-gray-700">
          Veuillez vérifier les informations ci-dessous avant de soumettre votre
          candidature.
        </p>
      </div>
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2">
            <h4 className="font-bold text-gray-800">
              Informations personnelles
            </h4>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Nom</p>
              <p className="font-medium">{formData.lastName || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Prénom</p>
              <p className="font-medium">{formData.firstName || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{formData.emailAddress || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Téléphone</p>
              <p className="font-medium">{formData.phoneNumber || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Date de naissance</p>
              <p className="font-medium">{formData.dateOfBirth || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Nationalité</p>
              <p className="font-medium">{formData.nationality || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Adresse</p>
              <p className="font-medium">{formData.address || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Pays</p>
              <p className="font-medium">{formData.country || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Ville</p>
              <p className="font-medium">{formData.city || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Code postal</p>
              <p className="font-medium">{formData.postalCode || "-"}</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2">
            <h4 className="font-bold text-gray-800">Parcours académique</h4>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Dernier diplôme</p>
              <p className="font-medium">{formData.lastDegree || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Établissement</p>
              <p className="font-medium">{formData.institution || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Année d'obtention</p>
              <p className="font-medium">{formData.graduationYear || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Domaine d'études</p>
              <p className="font-medium">{formData.fieldOfStudy || "-"}</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2">
            <h4 className="font-bold text-gray-800">Programme choisi</h4>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Programme</p>
              <p className="font-medium">{formData.program || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Période d'études</p>
              <p className="font-medium">{formData.studyPeriod || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Mode de financement</p>
              <p className="font-medium">{formData.funding || "-"}</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2">
            <h4 className="font-bold text-gray-800">Documents fournis</h4>
          </div>
          <div className="p-4 space-y-2 text-sm">
            <div className="flex items-center">
              <FaCheck
                className={` ${formData.cv ? " text-green-500 mr-2" : ""}`}
              />
              <span>CV</span>
            </div>
            <div className="flex items-center">
              <FaCheck
                className={` ${formData.degree ? " text-green-500 mr-2" : ""}`}
              />
              <span>Diplômes</span>
            </div>
            <div className="flex items-center">
              <FaCheck
                className={` ${formData.cin ? " text-green-500 mr-2" : ""}`}
              />
              <span>Pièce d'identité ou passeport</span>
            </div>
            <div className="flex items-center">
              <FaCheck
                className={` ${
                  formData.birthCertificate ? " text-green-500 mr-2" : ""
                }`}
              />
              <span>Bulletin de naissance</span>
            </div>
            <div className="flex items-center">
              <FaCheck
                className={` ${
                  formData.certificateOfResidence ? " text-green-500 mr-2" : ""
                }`}
              />
              <span>Certificat de résidence</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        {/* <div className="flex items-start mb-4">
          <input
            type="checkbox"
            id="acceptConditions"
            name="acceptConditions"
            checked={formData.acceptConditions}
            onChange={handleCheckboxChange}
            className="mt-1 mr-2"
          />
          <label htmlFor="acceptConditions" className="text-sm text-gray-700">
            Je certifie l'exactitude des informations fournies et j'accepte les{" "}
            <a href="#" className="text-blue-700 hover:underline">
              conditions générales
            </a>{" "}
            et la{" "}
            <a href="#" className="text-blue-700 hover:underline">
              politique de confidentialité
            </a>{" "}
            de l'AELI Madagascar.
          </label>
        </div>
        {errors.acceptConditions && (
          <p className="mt-1 text-sm text-red-500">{errors.acceptConditions}</p>
        )} */}
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800 mb-2">Prochaines étapes</h4>
        <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
          <li>
            Vérification de votre dossier par notre équipe d'admission (3-5
            jours ouvrables)
          </li>
          <li>
            Notification par email de la recevabilité de votre candidature
          </li>
          <li>
            Si votre dossier est retenu, invitation à un entretien (en personne
            ou en ligne)
          </li>
          <li>Décision finale d'admission communiquée par email</li>
          <li>
            En cas d'admission, paiement des frais d'inscription pour confirmer
            votre place
          </li>
        </ol>
      </div>
      <ButtonNextPrev />
    </div>
  );
}
