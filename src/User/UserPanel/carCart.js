import React from 'react';
import "./cssfiles/carCart.css"

function CarCart() {
  return (
    <main>
      <section id="armada">
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-5">
            <div className="col">
              <div className="card armada text-center">
                <div className="card-body1 py-3">
                  <i className="fas fa-car fa-5x"></i>
                  <h2 className="card-title text-center">Toyota All New Avanza</h2>
                  <p className="card-text text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam temporibus, vel quas impedit inventore autem.</p>
                </div>
                <div className="summary w-100 d-flex flex-row flex-wrap border-top border-bottom p-3 m-1 justify-content-center">
                  <div className="price d-flex flex-row justify-content-between align-items-baseline">
                    <div className="currency fs-1 fw-bold flex-grow-0">Rp.</div>
                    <div className="nominal fs-4 fw-bold flex-grow-1 w-100 text-end">399.000,-</div>
                  </div>
                  <div className="periode w-100 text-center mt-1">per 6 - 12 hours</div>
                </div>
                <div className="d-flex flex-row flex-wrap w-100 m-1 justify-content-center align-content-between border-bottom">
                  <div className="driver p-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Include Driver">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <div className="gasoline p-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Include Gasoline">
                    <i className="fas fa-gas-pump"></i>
                  </div>
                  <div className="capacity p-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Capacity 7 pax">
                    <i className="fas fa-users"></i><span className="ms-2">Capacity 7 pax</span>
                  </div>
                </div>
                <div className="action text-center p-3 m-auto">
                  <div className="btn-group" role="group" aria-label="Card Action">
                    <button type="button" className="btn btn-whatsapp"><i className="fab fa-whatsapp"></i><span className="d-none d-lg-inline-block ms-2">Book Now</span></button>
                    <button type="button" className="btn btn-primary"><i className="fa fa-phone"></i><span className="d-none d-lg-inline-block ms-2">Call Us</span></button>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the structure for other cards */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CarCart;
