<script lang="ts">
  import { config } from '$lib/config';
</script>

<section id="contact" class="px-12 py-24 sm:px-5 sm:py-12">
  <div class="sec-label">Get In Touch</div>
  <h2 class="sec-title">Book an Appointment</h2>

  <div class="grid grid-cols-2 sm:grid-cols-1 gap-12">
    <!-- Info -->
    <div class="flex flex-col gap-6">
      <div class="flex gap-4 items-start">
        <div class="w-11 h-11 rounded-md bg-primary flex items-center justify-center text-[18px]">📞</div>
        <div class="flex flex-col">
          <h4 class="text-sm font-medium text-charcoal mb-0.5">Phone</h4>
          <p class="text-sm text-mid">{config.contact.phone}</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="w-11 h-11 rounded-md bg-primary flex items-center justify-center text-[18px]">✉️</div>
        <div class="flex flex-col">
          <h4 class="text-sm font-medium text-charcoal mb-0.5">Email</h4>
          <p class="text-sm text-mid">{config.contact.email}</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="w-11 h-11 rounded-md bg-primary flex items-center justify-center text-[18px]">📍</div>
        <div class="flex flex-col">
          <h4 class="text-sm font-medium text-charcoal mb-0.5">Address</h4>
          <p class="text-sm text-mid">{config.contact.address}</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="w-11 h-11 rounded-md bg-primary flex items-center justify-center text-[18px]">🕐</div>
        <div class="flex flex-col">
          <h4 class="text-sm font-medium text-charcoal mb-0.5">Hours</h4>
          <p class="text-sm text-mid">Sat–Thu: 9AM – 6PM</p>
        </div>
      </div>
    </div>

    <!-- Form -->
    <div class="bg-white rounded-lg p-10 sm:p-6 border border-light">
      <div class="flex flex-col gap-4">
        <div>
          <label for="name" class="block text-xs font-medium text-charcoal mb-1.5 tracking-wide">Your Name</label>
          <input id="name" type="text" placeholder="e.g. Rahman Ahmed" class="w-full border border-light rounded-sm px-4 py-2.5 text-sm outline-none focus:border-secondary transition-colors" />
        </div>
        <div>
          <label for="phone" class="block text-xs font-medium text-charcoal mb-1.5 tracking-wide">Phone Number</label>
          <input id="phone" type="text" placeholder="+880..." class="w-full border border-light rounded-sm px-4 py-2.5 text-sm outline-none focus:border-secondary transition-colors" />
        </div>
        <div>
          <label for="reason" class="block text-xs font-medium text-charcoal mb-1.5 tracking-wide">Reason for Visit</label>
          <select id="reason" class="w-full border border-light rounded-sm px-4 py-2.5 text-sm outline-none focus:border-secondary transition-colors">
            <option>General Check-up</option>
            <option>Follow-up</option>
            <option>Emergency</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label for="message" class="block text-xs font-medium text-charcoal mb-1.5 tracking-wide">Message</label>
          <textarea id="message" placeholder="Describe your symptoms..." class="w-full border border-light rounded-sm px-4 py-2.5 text-sm outline-none focus:border-secondary transition-colors min-h-[80px]"></textarea>
        </div>
        <button class="btn btn-gold w-full py-3.5">Send Appointment Request</button>
      </div>
    </div>
  </div>
</section>
