import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
const options = [
      {
        "id": 1,
        "name": "Basic Membership",
        "price": 25,
        "duration": "Monthly",
        "features": [
          "Access to gym floor",
          "Locker room access",
          "1 guest pass per month",
          "Access during regular hours",
          "Standard equipment access",
          "Free Wi-Fi",
          "Member discounts on merchandise"
        ]
      },
      {
        "id": 2,
        "name": "Standard Membership",
        "price": 70,
        "duration": "Monthly",
        "features": [
          "Access to gym floor",
          "Locker room access with towel service",
          "5 guest passes per month",
          "Access to group fitness classes",
          "Extended hours access",
          "Access to premium equipment",
          "Free Wi-Fi and coffee bar",
          "10% discount on personal training sessions",
          "Member discounts on merchandise and café items"
        ]
      },
      {
        "id": 3,
        "name": "Premium Membership",
        "price": 200,
        "duration": "Monthly",
        "features": [
          "All-access gym floor",
          "Private locker with towel and laundry service",
          "Unlimited guest passes",
          "Unlimited group fitness classes",
          "3 personal training sessions",
          "Access to sauna, pool, and steam room",
          "Complimentary workout gear rental",
          "Priority class booking",
          "Free access to monthly workshops and seminars",
          "15% discount on all additional services",
          "Access to juice bar with one free drink per visit"
        ]
      },
      {
        "id": 4,
        "name": "Annual Membership",
        "price": 500,
        "duration": "Yearly",
        "features": [
          "Full gym access and locker room privileges",
          "Unlimited guest passes",
          "20 group fitness classes",
          "5 personal training sessions",
          "Access to sauna, pool, and steam room",
          "Priority customer support",
          "Access to member-exclusive events",
          "Complimentary health assessments twice per year",
          "Discounts on spa services and massages",
          "20% discount on merchandise and café items",
          "Personalized workout plan"
        ]
      },
      {
        "id": 5,
        "name": "VIP Membership",
        "price": 1000,
        "duration": "Yearly",
        "features": [
          "24/7 access to gym and all facilities",
          "Private locker and luxury amenities",
          "Unlimited guest passes",
          "Unlimited group and specialized fitness classes",
          "10 personal training sessions",
          "Access to spa, sauna, pool, and VIP lounge",
          "Personalized workout and diet plan",
          "Monthly health and wellness assessments",
          "Dedicated VIP support line",
          "Free access to all workshops, seminars, and events",
          "Exclusive fitness gear upon signup",
          "25% discount on all additional services",
          "Private parking access",
          "Access to VIP-only areas and equipment",
          "Invitation to VIP social events and networking"
        ]
      }
    
]
  
console.log(options)
      
    return (
        <div className="mr-12">
            <h2 className="text-5xl">Best prices in the town</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {
              options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
  

  

          </div>
        </div>
    );
};

export default PriceOptions;